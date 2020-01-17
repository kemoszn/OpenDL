import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0xb06e0Be43139AE82588cE27f93e8651Ee57bE59C"
);

export default instance;