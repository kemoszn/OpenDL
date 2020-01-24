import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Debt from '../../ethereum/debt';
import web3 from '../../ethereum/web3';
import { Card, Button,Icon } from 'semantic-ui-react';

class Detail extends Component {
    static async getInitialProps(props) {
    const debt = Debt(props.query.address);

    const details = await debt.methods.getDetails().call();
    return {
      address: props.query.address,
      lender: details[0],
      borrower: details[1],
      amount: web3.utils.fromWei(details[2],'ether'),
      description: details[3],
      isSettled: details[4]
    };
    }
    renderDetails() {
    const {
      address,  
      lender,
      borrower,
      amount,
      description,
      isSettled
    } = this.props;
    let isSettledString = isSettled;
    if (isSettled == false){
        isSettledString = 'times circle'
    } else { isSettledString = 'check circle'}
    const items = [
      {
        header: <h3 style={{color: "#2185d0" }}>{address}</h3>,
        meta: (<div><b>Debt amount: </b>{amount}  ETH</div>),
        description:
          (<div>
          <b>Description: </b>{description} <br/>
         <b> Lender:</b> {lender} <br/>
         <b> borrower: </b>{borrower}
         <br/> <b> Settled: </b> <Icon name={isSettledString} />  <br/><hr/>
         <Button primary size="small"> Settle </Button>
          </div>),
          fluid: true
      }]

    return <Card.Group items={items}/>;

    }

    render() {
        return (
            <Layout>
            <div> <br/>
            <h3>Debt Contract Details  </h3>
            {this.renderDetails()}
            <h3>Transaction Receipt</h3>
            </div>
            </Layout>
        )
    }
}

export default Detail;