import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0x0A0b7586c9AdAB158CfF11DE93e4a89c70733840"
);

export default instance;