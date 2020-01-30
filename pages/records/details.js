import React, { Component } from 'react';
import QRCode from 'qrcode.react'
import Layout from '../../components/Layout';
import Debt from '../../ethereum/debt';
import web3 from '../../ethereum/web3';
import { Form, Card, Button, Icon, Message, Grid } from 'semantic-ui-react';
import { Router } from '../../routes';

class Detail extends Component {
    state = {
      loading: false,
      errorMessage: "",
      userAccount: "",
      from: "",
      to: "",
      value: "",
      blockNumber: "",
      timestamp: "",
    }
    async componentDidMount(){
      const accounts = await web3.eth.getAccounts();
      this.setState ({ userAccount: accounts[0], str: this.props.address });
      await web3.eth.getTransaction(this.props.txHash)
        .then((data)=> this.setState({from: data.from, to: data.to,
         value: web3.utils.fromWei(data.value, "ether"),
         blockNumber: data.blockNumber }));
      const timestamp = await web3.eth.getBlock(this.state.blockNumber);
      const d = new Date(timestamp.timestamp * 1000);
      const s = d.toUTCString();
      this.setState({ timestamp: s });
      const strLink1 = 'https://rinkeby.etherscan.io/address/' + this.props.address;
      document.getElementById("link1").setAttribute("href", strLink1)
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
      isSettled: details[4],
      txHash: details[5]
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
      isSettled,
    } = this.props;
    let isSettledString = isSettled;
    if (isSettled == false){
        isSettledString = 'times circle'
    } else { isSettledString = 'check circle'}
    const addressQR = 'https://rinkeby.etherscan.io/address/' + address;
    const items = [
      {
        header: (<div><p style={{color: "#2185d0" }}><b>{address}</b> </p> </div> ),
        meta: (<div><a id="link1">See in Etherscan <Icon name="external alternate"></Icon></a></div>),
        description:
          (<div>
          <Grid coloumns={2}>
          <Grid.Row>
          <Grid.Column width={13}> <br/><br/>
          <b>Debt Amount: </b>{amount}  ETH <br/>
          <b>Description: </b>{description} <br/>
         <b> Lender:</b> {lender} <br/>
         <b> borrower: </b>{borrower}
         <br/> <b> Settled: </b> <Icon name={isSettledString} /> 
         </Grid.Column>
         <Grid.Column width={3}>
         <QRCode size={150} value={addressQR} />
         </Grid.Column> 
         </Grid.Row>
         </Grid>
          { borrower==this.state.userAccount && !isSettled &&
         <div>
         <hr/>
         <Form onSubmit={this.onSettle} error={!!this.state.errorMessage}>
           <Message error header="Oops!" content={this.state.errorMessage}/>
           <Button loading={this.state.loading} primary size="small"> Settle </Button>
         </Form></div>}
          </div>),
          fluid: true
      }]

    return <Card.Group items={items}/>;

    }

    renderTransaction() {
      const { txHash } = this.props;
      const txQR = 'https://rinkeby.etherscan.io/tx/' + txHash;
      const items = [
        {
          header: <p style={{color: "#2185d0" }}><b>{txHash}</b></p>,
          description: (<div>
          <Grid coloumns={2}>
          <Grid.Row>
          <Grid.Column width={13}> <br/>
          <b> From: </b> {this.state.from} <br/>
          <b>To:</b> {this.state.to}
          <br/><b>Amount Paid: </b>{this.state.value} ETH <br/>
          </Grid.Column>
         <Grid.Column width={3}>
         <QRCode size={100} value={txQR} />
         </Grid.Column> 
         </Grid.Row>
         </Grid>
          </div>),
          meta: `${this.state.timestamp}` ,
          fluid: true
        }]
      return <Card.Group items={items}/>;
    }

    render() {
        return (
            <Layout>
            <div> <br/>
            <h3><Icon name="address card outline"></Icon>Debt Contract Details  </h3>
            {this.renderDetails()}
            <h3><Icon name="file alternate outline"></Icon>Transaction Receipt</h3>
            {this.renderTransaction()}
            </div>
            </Layout>
        )
    }
}

export default Detail;