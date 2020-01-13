import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0xC8F1423d53149668A378750EA646574379f0F015"
);

export default instance;