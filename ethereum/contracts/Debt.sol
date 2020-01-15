pragma solidity ^0.4.19;

contract DebtFactory {
    address[] public debts;
    
    function createDebt(uint _amount, address _borrower, string _description) public {
        require (msg.sender != _borrower);
        address newDebt = new Debt(_amount, _borrower, _description);
        debts.push(newDebt);
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
    bool public is_verified;
    
    
    function Debt(uint _amount, address _borrower, string _description) public {
        lender = msg.sender;
        amount = _amount;
        borrower = _borrower;
        description = _description;
        is_settled = false;
        is_verified = false;
    }
    
    function settleDebt() public payable onlyBorrower{
        require (msg.value == amount);
        require (is_verified == true);
        lender.transfer(msg.value);
        is_settled = true;
    } 
    
    function verifyDebt() public onlyBorrower{
        is_verified = true;
    }

    function getDetails() public view returns (
      address, address, uint, string, bool, bool
      ) {
        return (
          lender,
          borrower,
          amount,
          description,
          is_settled,
          is_verified
        );
    }
    
    modifier onlyBorrower() {
     require(msg.sender == borrower);
        _;
    }
}