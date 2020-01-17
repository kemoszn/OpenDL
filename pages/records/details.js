import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Debt from '../../ethereum/debt';
import web3 from '../../ethereum/web3';
import { Card } from 'semantic-ui-react';

class Detail extends Component {
    static async getInitialProps(props) {
    const debt = Debt(props.query.address);

    const details = await debt.methods.getDetails().call();
    return {
      address: props.query.address,
      lender: details[0],
      borrower: details[1],
      amount: details[2],
      description: details[3],
      isSettled: details[4],
      isVerified: details[5]
    };
    }
    renderDetails() {
        console.log(this.props.isSettled);
    const {
      address,  
      lender,
      borrower,
      amount,
      description,
      isSettled,
      isVerified
    } = this.props;
    let isVerifiedString = isVerified;
    let isSettledString = isSettled;
    if (isVerified == false) {
        isVerifiedString = 'False'
    } else { isVerifiedString = 'True'}
    if (isSettled == false){
        isSettledString = 'False'
    } else { isVerifiedString = 'True'}
    const items = [
      {
        header: address,
        meta: (<div><b>Debt amount: </b>{amount}  Wei</div>),
        description:
          (<div>
         <b> Lender:</b> {lender} <br/>
         <b> borrower: </b>{borrower}
         <br/> <b> Verified: </b> {isVerifiedString} 
         <br/> <b> Settled: </b> {isSettledString} 
          </div>),
          fluid: true
      }]

    return <Card.Group items={items}/>;

    }

    render() {
        return (
            <Layout>
            <div>
            <h4>Debt Contract Details  </h4>
            {this.renderDetails()}
            </div>
            </Layout>
        )
    }
}

export default Detail;