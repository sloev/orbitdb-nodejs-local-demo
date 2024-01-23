# Example of local nodejs replication of orbitdb



## Usage

create db:
```bash
$ node create_db.js 13245 FOOBAR
running with port:13245 and ./FOOBAR
clientEventsDb address /orbitdb/zdpuAkn4eb7Xdy5UFCvFGEcYd5HDhufhJHWAgYgVMpWK7U5wF
```

run server
```bash
$ node server.js 13245 FOOBAR  /orbitdb/zdpuAkn4eb7Xdy5UFCvFGEcYd5HDhufhJHWAgYgVMpWK7U5wF
running with port:13245 and ./FOOBAR
clientEventsDb address /orbitdb/zdpuArg5XeMUYwsXT37iuhsSwxJBvuJB4M6FHEdWmmACTkgWq
[]
entry { op: 'ADD', key: null, value: 'hello from ./FOOBAR 1' }
(node:75788) MaxListenersExceededWarning: Possible EventTarget memory leak detected. 11 abort listeners added to [AbortSignal]. Use events.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
entry { op: 'ADD', key: null, value: 'hello from ./FOOBAR 2' }
```

run clients (unique port and directory name!)
```bash
$ node server.js 13255 FOOBARBAZ  /orbitdb/zdpuAkn4eb7Xdy5UFCvFGEcYd5HDhufhJHWAgYgVMpWK7U5wF
running with port:13255 and ./FOOBARBAZ
clientEventsDb address /orbitdb/zdpuArg5XeMUYwsXT37iuhsSwxJBvuJB4M6FHEdWmmACTkgWq
[]
entry { op: 'ADD', key: null, value: 'hello from ./FOOBARBAZ 1' }
(node:76188) MaxListenersExceededWarning: Possible EventTarget memory leak detected. 11 abort listeners added to [AbortSignal]. Use events.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
entry { op: 'ADD', key: null, value: 'hello from ./FOOBARBAZ 2' }
entry { op: 'ADD', key: null, value: 'hello from ./FOOBARBAZ 3' }
```

## errors

see this issue on orbitdb https://github.com/orbitdb/orbitdb/issues/1154

```
r➜  saysheep node server.js 13245 FOOBAR  /orbitdb/zdpuAkn4eb7Xdy5UFCvFGEcYd5HDhufhJHWAgYgVMpWK7U5wF
running with port:13245 and ./FOOBAR
clientEventsDb address /orbitdb/zdpuAkn4eb7Xdy5UFCvFGEcYd5HDhufhJHWAgYgVMpWK7U5wF
[
  {
    hash: 'zdpuB3avp7QNiLGRrqW4VGRaMaiBnVXb5uNxM9pDnh1WMedrG',
    value: 'hello from ./FOOBAR 0'
  },
  {
    hash: 'zdpuAnEBejvHf7eV3V8GdmxZ3eohHC2b99HeArDwirFEKbL12',
    value: 'hello from ./FOOBARBAZ 0'
  },
  {
    hash: 'zdpuAkZfwcpwSkZD5pjueZ23vFkRdCkEQBP5kPr7DQ5vJpzX2',
    value: 'hello from ./FOOBAR 1'
  },
  {
    hash: 'zdpuAksgzcANHLxzAAdmBoJ5YvQ1keC8JPB8hgULAjv5QLWhT',
    value: 'hello from ./FOOBAR 2'
  },
  {
    hash: 'zdpuApjmxQZSuRdU5Jox3tdgWo989g75HcvuH83Ty2LjjfjE4',
    value: 'hello from ./FOOBAR 3'
  },
  {
    hash: 'zdpuB21RVBxSH1PDupAiT9S3shwvTohRe7ZbpDs4FBdzQirJ2',
    value: 'hello from ./FOOBAR 4'
  },
  {
    hash: 'zdpuArotYNoZRjRmWvMquVwajtK2afVSqzjgeoUwN2XSo6wBa',
    value: 'hello from ./FOOBAR 5'
  },
  {
    hash: 'zdpuAm3srWH8BrZq3PNSts9E5SdD9xR5pDQFBZYdCMXtissFq',
    value: 'hello from ./FOOBAR 6'
  },
  {
    hash: 'zdpuAxhrzCC1CFfvwQCR7QT1Jwo1KPVgzTVF5CMZmY5gJFpws',
    value: 'hello from ./FOOBAR 7'
  },
  {
    hash: 'zdpuApkeaaSKWbrAUJqpbhoRoooemTzFAKhbcpqugx1U28T14',
    value: 'hello from ./FOOBARBAZ 0'
  },
  {
    hash: 'zdpuAtEWxR7hiJZ5zHUrXzSe1L4jjaTk3RdfSQiyVZPPe5XoX',
    value: 'hello from ./FOOBAR 8'
  },
  {
    hash: 'zdpuAkhtjZ6W81zLHHnPaynoX9PDn5QTizTgRAzZ3ZZ2pCskQ',
    value: 'hello from ./FOOBARBAZ 1'
  },
  {
    hash: 'zdpuAo4RLpKKFa56F3TAtk3uW2dAiAkJRnrHoz3hjfG8MbL64',
    value: 'hello from ./FOOBAR 9'
  },
  {
    hash: 'zdpuAp9cZULMutQwVK8GWny2rg4WQSLZxUAU9XcvEJJa8RSiG',
    value: 'hello from ./FOOBAR 10'
  },
  {
    hash: 'zdpuAmno4QAPBSBBj7sfFs4ir5g36GQ9BrJME9EXfGmDSupWr',
    value: 'hello from ./FOOBAR 11'
  },
  {
    hash: 'zdpuAsHa13ue7EEsx2WZ9JrYcJDnmmgDxTeMPBnJ3y21cMGR7',
    value: 'hello from ./FOOBAR 12'
  },
  {
    hash: 'zdpuAtuWs18SKPJNaRtBNqAhgYLbWccYLEWRZpLKF5zx8gEdS',
    value: 'hello from ./FOOBAR 13'
  },
  {
    hash: 'zdpuAupmJMBpeLZM9x82gDneWnHqpsyB6rTVkvdpcobBYqFEL',
    value: 'hello from ./FOOBAR 14'
  },
  {
    hash: 'zdpuAobn8C3rYZnutnBpKUrnRcX8dYe8uPFKCGYcFxF7LRChc',
    value: 'hello from ./FOOBAR 15'
  },
  {
    hash: 'zdpuAyARSECBDtue8PpjfnsL8FwHQkFhxBh6UU2iXwY3tB1uk',
    value: 'hello from ./FOOBAR 16'
  },
  {
    hash: 'zdpuAw1bVt8pS6c2MUJkch8yvjEa8SEwSxiCMo4q4BFm9e3Jf',
    value: 'hello from ./FOOBAR 17'
  },
  {
    hash: 'zdpuArLhmsuyLvKEui2Dw8cV1mCZcs7pTChjzfLhHVKJWsTfj',
    value: 'hello from ./FOOBAR 18'
  }
]
(node:78587) MaxListenersExceededWarning: Possible EventTarget memory leak detected. 11 abort listeners added to [AbortSignal]. Use events.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)




node:internal/process/promises:289
            triggerUncaughtException(err, true /* fromPromise */);
            ^

[AggregateError: All promises were rejected] {
  [errors]: [
    Error: Want for bafyreiaeg347tyzk4o5ixpsgsstemg5u5fhyyui6isuqlhm2qvbbwi54eu aborted
        at EventTarget.<anonymous> (file:///home/nihil/Documents/saysheep/node_modules/ipfs-bitswap/dist/src/notifications.js:56:24)
        at [nodejs.internal.kHybridDispatch] (node:internal/event_target:814:20)
        at EventTarget.dispatchEvent (node:internal/event_target:749:26)
        at abortSignal (node:internal/abort_controller:371:10)
        at AbortController.abort (node:internal/abort_controller:393:5)
        at EventTarget.onAbort (file:///home/nihil/Documents/saysheep/node_modules/any-signal/dist/src/index.js:8:20)
        at [nodejs.internal.kHybridDispatch] (node:internal/event_target:814:20)
        at EventTarget.dispatchEvent (node:internal/event_target:749:26)
        at abortSignal (node:internal/abort_controller:371:10)
        at AbortController.abort (node:internal/abort_controller:393:5),
    AggregateError: unable to fetch raw block for CID bafyreiaeg347tyzk4o5ixpsgsstemg5u5fhyyui6isuqlhm2qvbbwi54eu from any gateway
        at TrustlessGatewayBlockBroker.retrieve (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/trustless-gateway/broker.js:52:15)
        at processTicksAndRejections (node:internal/process/task_queues:95:5)
        at runNextTicks (node:internal/process/task_queues:64:3)
        at listOnTimeout (node:internal/timers:540:9)
        at process.processTimers (node:internal/timers:514:7)
        at async file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:182:31
        at async Promise.any (index 1)
        at async raceBlockRetrievers (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:179:16)
        at async NetworkedStorage.get (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:91:27)
        at async BlockStorage.get (file:///home/nihil/Documents/saysheep/node_modules/helia/dist/src/storage.js:68:20) {
      [errors]: [
        Error: fetching raw block for CID bafyreiaeg347tyzk4o5ixpsgsstemg5u5fhyyui6isuqlhm2qvbbwi54eu from gateway https://dweb.link/ipfs/bafyreiaeg347tyzk4o5ixpsgsstemg5u5fhyyui6isuqlhm2qvbbwi54eu?format=raw was aborted
            at TrustlessGateway.getRawBlock (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/trustless-gateway/trustless-gateway.js:71:23)
            at processTicksAndRejections (node:internal/process/task_queues:95:5)
            at runNextTicks (node:internal/process/task_queues:64:3)
            at listOnTimeout (node:internal/timers:540:9)
            at process.processTimers (node:internal/timers:514:7)
            at async TrustlessGatewayBlockBroker.retrieve (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/trustless-gateway/broker.js:25:31)
            at async file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:182:31
            at async Promise.any (index 1)
            at async raceBlockRetrievers (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:179:16)
            at async NetworkedStorage.get (file:///home/nihil/Documents/saysheep/node_modules/@helia/block-brokers/dist/src/utils/networked-storage.js:91:27)
      ]
    }
  ]
}

Node.js v20.10.0
```