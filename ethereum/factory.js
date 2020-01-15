import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0xef9b1f8Bc36abb2a4980b328fF914CF154151B58"
);

export default instance;