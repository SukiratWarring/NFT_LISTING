const { ethers } = require("hardhat")

async function main() {
  const CryptoArt = await ethers.getContractFactory("CryptoArt")
  const cryptoArt = await CryptoArt.deploy("CryptoArt", "CART")

  await cryptoArt.deployed()
  console.log(`Contract successfully deployed to ${cryptoArt.address}`)

  const newItemId = await cryptoArt.mint("https://ipfs.io/ipfs/QmSViUnYxQXh1nNqjB6MXFC2FgUiCdBVQn6h9dEpXM1VvC")
  console.log(`NFT minted successfully :: ${newItemId}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });