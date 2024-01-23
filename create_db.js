
import { createLibp2p } from 'libp2p'
import { createHelia, libp2pDefaults} from 'helia'
import { createOrbitDB } from '@orbitdb/core'
import { IPFSAccessController } from '@orbitdb/core'
import { LevelBlockstore } from 'blockstore-level'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'




const main = async () => {
  const args = process.argv;
  if (args.length!=4){
    console.log("usage: node server.js PORT DIRECTORY")
    process.exit(1);
  }
  const PORT = args[2]
  const DIRECTORY = `./${args[3]}`
  const config = libp2pDefaults()
  config.addresses = {
    listen: [ `/ip4/0.0.0.0/tcp/${PORT}`,
    `/ip6/::/tcp/${PORT}`,
    '/webrtc']
  }
  console.log(`running with port:${PORT} and ${DIRECTORY}`)
  config.services.pubsub = gossipsub({ allowPublishToZeroPeers: true })


  const libp2p = await createLibp2p(config)

  const blockstore = new LevelBlockstore(DIRECTORY)
  const ipfs = await createHelia({ libp2p, blockstore })


  const orbitdb = await createOrbitDB({ ipfs, directory: DIRECTORY })

  const clientEventsDb = await orbitdb.open(DIRECTORY, { type: 'events', syncAutomatically:true,AccessController: IPFSAccessController({ write: ['*'] }) })

  // Copy this output if you want to connect a peer to another.
  console.log('clientEventsDb address', clientEventsDb.address)
  
    // Close your db and stop OrbitDB and IPFS.
    await clientEventsDb.close()
   
    await orbitdb.stop()
    await ipfs.stop()

    process.exit()
  
}

main()