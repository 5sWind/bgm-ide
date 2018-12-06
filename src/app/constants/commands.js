const allPrograms = [
  {'bgmchains': 'The bgmchains.js library is a compact and complete JavaScript library for Bgmchain.'},
  {'remix': 'Bgmchain IDE and tools for the web.'},
  {'web3': 'The web3.js library is a collection of modules which contain specific functionality for the bgmchain ecosystem.'},
  {'swarmgw': 'This library can be used to upload/download files to Swarm via https://swarm-gateways.net/.'}
]

const allCommands = [
  {'remix.debug(hash)': 'Start debugging a transaction.'},
  {'remix.debugHelp()': 'Display help message for debugging'},
  {'remix.execute(filepath)': 'Run the script specified by file path. If filepath is empty, script currently displayed in the editor is executed.'},
  {'remix.exeCurrent()': 'Run the script currently displayed in the editor.'},
  {'remix.getFile(path)': 'Returns the content of the file located at the given path'},
  {'remix.help()': 'Display this help message.'},
  {'remix.loadgist(id)': 'Load a gist in the file explorer.'},
  {'remix.loadurl(url)': 'Load the given url in the file explorer. The url can be of type github, swarm or ipfs.'},
  {'remix.setFile(path, content)': 'set the content of the file located at the given path'},
  {'remix.setproviderurl(url)': 'Change the current provider to Web3 provider and set the url endpoint.'},

  {'swarmgw.get(url, cb)': 'Download files from Swarm via https://swarm-gateways.net/'},
  {'swarmgw.put(content, cb)': 'Upload files to Swarm via https://swarm-gateways.net/'},

  {'bgmchains.Contract': 'This API provides a graceful connection to a contract deployed on the blockchain, simplifying calling and querying its functions and handling all the binary protocol and conversion as necessarily.'},
  {'bgmchains.HDNode': 'A Hierarchical Deterministic Wallet represents a large tree of private keys which can reliably be reproduced from an initial seed.'},
  {'bgmchains.Interface': 'The Interface Object is a meta-class that accepts a Solidity (or compatible) Application Binary Interface (ABI) and populates functions to deal with encoding and decoding the parameters to pass in and results returned.'},
  {'bgmchains.providers': 'A Provider abstracts a connection to the Bgmchain blockchain, for issuing queries and sending state changing transactions.'},
  {'bgmchains.SigningKey': 'The SigningKey interface provides an abstraction around the secp256k1 elliptic curve cryptography library.'},
  {'bgmchains.utils': 'The utility functions exposed in both the bgmchains umbrella package and the bgmchains-utils.'},
  {'bgmchains.utils.AbiCoder': 'Create a new ABI Coder object'},
  {'bgmchains.utils.RLP': 'This encoding method is used internally for several aspects of Bgmchain, such as encoding transactions and determining contract addresses.'},
  {'bgmchains.Wallet': 'A wallet manages a private/public key pair which is used to cryptographically sign transactions and prove ownership on the Bgmchain network.'},
  {'bgmchains.version': 'Contains the version of the bgmchains container object.'},

  {'web3.bzz': 'Bzz module for interacting with the swarm network.'},
  {'web3.bgm': 'Bgm module for interacting with the Bgmchain network.'},
  {'web3.bgm.accounts': 'The web3.bgm.accounts contains functions to generate Bgmchain accounts and sign transactions and data.'},
  {'web3.bgm.abi': 'The web3.bgm.abi functions let you de- and encode parameters to ABI (Application Binary Interface) for function calls to the EVM (Bgmchain Virtual Machine).'},
  {'web3.bgm.ens': 'The web3.bgm.ens functions let you interacting with ENS.'},
  {'web3.bgm.Iban': 'The web3.bgm.Iban function lets convert Bgmchain addresses from and to IBAN and BBAN.'},
  {'web3.bgm.net': 'Net module for interacting with network properties.'},
  {'web3.bgm.personal': 'Personal module for interacting with the Bgmchain accounts.'},
  {'web3.bgm.subscribe': 'The web3.bgm.subscribe function lets you subscribe to specific events in the blockchain.'},
  {'web3.givenProvider': 'When using web3.js in an Bgmchain compatible browser, it will set with the current native provider by that browser. Will return the given provider by the (browser) environment, otherwise null.'},
  {'web3.modules': 'Contains the version of the web3 container object.'},
  {'web3.providers': 'Contains the current available providers.'},
  {'web3.shh': 'Shh module for interacting with the whisper protocol'},
  {'web3.utils': 'This package provides utility functions for Bgmchain dapps and other web3.js packages.'},
  {'web3.version': 'Contains the version of the web3 container object.'},

  {'web3.bgm.clearSubscriptions();': 'Resets subscriptions.'},
  {'web3.bgm.Contract(jsonInterface[, address][, options])': 'The web3.bgm.Contract object makes it easy to interact with smart contracts on the bgmchain blockchain.'},
  {'web3.bgm.accounts.create([entropy]);': 'The web3.bgm.accounts contains functions to generate Bgmchain accounts and sign transactions and data.'}
]

module.exports = {
  allPrograms,
  allCommands
}
