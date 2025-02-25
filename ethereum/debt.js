import web3 from './web3';
import Debt from './build/Debt.json';

export default address => {
  return new web3.eth.Contract(JSON.parse(Debt.interface), address);
};