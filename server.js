
import { createLibp2p } from 'libp2p'
import { createHelia, libp2pDefaults} from 'helia'
import { createOrbitDB } from '@orbitdb/core'
import { IPFSAccessController } from '@orbitdb/core'
import { LevelBlockstore } from 'blockstore-level'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { mdns } from '@libp2p/mdns'



const main = async () => {
  const args = process.argv;
  if (args.length!=5){
    console.log("usage: node server.js PORT DIRECTORY")
    process.exit(1);
  }
  const PORT = args[2]
  const DIRECTORY = `./${args[3]}`
  const DATABASE_CID = args[4]
  const config = libp2pDefaults()
  config.addresses = {
    listen: [ `/ip4/0.0.0.0/tcp/${PORT}`,
    `/ip6/::/tcp/${PORT}`,
    '/webrtc']
  }
  
  config.peerDiscovery = [
    mdns()
  ]
  
  console.log(`running with port:${PORT} and ${DIRECTORY}`)
  config.services.pubsub = gossipsub({ allowPublishToZeroPeers: true })


  const libp2p = await createLibp2p(config)

  const blockstore = new LevelBlockstore(DIRECTORY)
  const ipfs = await createHelia({ libp2p, blockstore })


  const orbitdb = await createOrbitDB({ ipfs, directory: DIRECTORY })

  const clientEventsDb = await orbitdb.open(DATABASE_CID, { type: 'events', syncAutomatically:true,AccessController: IPFSAccessController({ write: ['*'] }) })
 

  // Copy this output if you want to connect a peer to another.
  console.log('clientEventsDb address', clientEventsDb.address)

  console.log(await clientEventsDb.all())
  
  var index = 0
  const sayHello = async() =>{
    await clientEventsDb.add(`hello from ${DIRECTORY} ${index}`)
    index += 1
    setTimeout(sayHello, 2000);
  }
  await sayHello()


  // Add some records to the db when another peers joins.
  clientEventsDb.events.on('join', async (peerId, heads) => {
    console.log("peer", peerId)
  })

  clientEventsDb.events.on('update', async (entry) => {
    console.log('entry', entry.payload)

    // To complete full replication, fetch all the records from the other peer.
  })

  // Clean up when stopping this app using ctrl+c
  process.on('SIGINT', async () => {
    // Close your db and stop OrbitDB and IPFS.
    await clientEventsDb.close()
    await orbitdb.stop()
    await ipfs.stop()

    process.exit()
  })
}

main()