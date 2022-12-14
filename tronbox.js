const port = process.env.HOST_PORT || 9090

module.exports = {
  networks: {
    mainnet: {
      privateKey: 'efb531a8b96859dd69e4cc8048ef32abddb0a003a5d05679e007b596a923562b',
      /*
A better way is to read the privateKey from env, create a .env file (it must be gitignored) containing something like

  export PRIVATE_KEY_MAINNET=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

Then, run the migration with:

  source .env && tronbox migrate --network mainnet

*/
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: 'efb531a8b96859dd69e4cc8048ef32abddb0a003a5d05679e007b596a923562b',
      userFeePercentage: 50,
      feeLimit: 1e9,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2'
    },
    nile: {
      privateKey: 'efb531a8b96859dd69e4cc8048ef32abddb0a003a5d05679e007b596a923562b',
      userFeePercentage: 100,
      feeLimit: 1e9,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      // For trontools/quickstart docker image
      privateKey: 'efb531a8b96859dd69e4cc8048ef32abddb0a003a5d05679e007b596a923562b',
      userFeePercentage: 0,
      feeLimit: 1e9,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.8.0'
      }
    }
  }
}
