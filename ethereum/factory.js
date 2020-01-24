import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0x0DF8C97c9391EbFC12F511250F5Ff64dD33ECa86"
);

export default instance;