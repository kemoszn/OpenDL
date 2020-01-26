import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0x4281223D547d8bc4eC215a02bF9F290958e39D1C"
);

export default instance;