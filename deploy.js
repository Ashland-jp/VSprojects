const { EtherSymbol } = require("@ethersproject/constants");
const ethers = require("ethers");
const fs = require("fs-extra");
//synchronous [solidity]
//asynchronous [js]
// HTTP://127.0.0.1:7545

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "91db849ce083bd7bbc165915a48456caea2d9d709fbbb202ad496649083cc2df",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); //await means stop
  console.log(contract);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
