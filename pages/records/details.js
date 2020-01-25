import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Debt from '../../ethereum/debt';
import web3 from '../../ethereum/web3';
import { Form, Card, Button, Icon, Message } from 'semantic-ui-react';
import { Router } from '../../routes';

class Detail extends Component {
    state = {
      loading: false,
      errorMessage: ""
    }
    
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

    onSettle = async (event) => {
      event.preventDefault();

      this.setState({ loading: true, errorMessage: ''});
      try {
        const accounts = await web3.eth.getAccounts();
        const debt = await Debt(this.props.address);
        await web3.eth.sendTransaction({
          from: accounts[0],
          to: this.props.lender,
          value: web3.utils.toWei(this.props.amount, 'ether')
        });
        await debt.methods.settleDebt().send({from: accounts[0]});
        console.log(this.props.address);
        //console.log(this.props.query.address);
        console.log(debt);

        Router.replaceRoute(`/records/${this.props.address}`);
        this.setState({ loading: false });
      } catch (err) {
        this.setState({ loading: false, errorMessage: err.message });
      }
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
         <Form onSubmit={this.onSettle} error={!!this.state.errorMessage}>
           <Message error header="Oops!" content={this.state.errorMessage}/>
           <Button loading={this.state.loading} primary size="small"> Settle </Button>
         </Form>
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