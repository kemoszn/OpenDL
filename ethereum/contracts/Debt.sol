pragma solidity ^0.4.19;

contract DebtFactory {
    address[] public debts;
    event ContractCreated(address newAddress);
    
    function createDebt(uint _amount, address _borrower, string _description, string _txHash) public returns (address){
        require (msg.sender != _borrower);
        address newDebt = new Debt(_amount, msg.sender, _borrower, _description, _txHash);
        debts.push(newDebt);
        ContractCreated(newDebt);
        return newDebt;
    }
    
    function getDeployedDebts() public view returns (address[]){
        return debts;
    }
}

contract Debt {
    uint public amount;
    address public borrower;
    address public lender;
    string public description;
    bool public is_settled;
    string public txHash;
    
    
    function Debt(uint _amount, address _lender, address _borrower, string _description, string _txHash) public {
        lender = _lender;
        amount = _amount;
        borrower = _borrower;
        description = _description;
        txHash = _txHash;
        is_settled = false;
    }
    
    function settleDebt() public onlyBorrower{
        is_settled = true;
    } 

    function getDetails() public view returns (
      address, address, uint, string, bool, string
      ) {
        return (
          lender,
          borrower,
          amount,
          description,
          is_settled,
          txHash
        );
    }
    
    modifier onlyBorrower() {
     require(msg.sender == borrower);
        _;
    }
}