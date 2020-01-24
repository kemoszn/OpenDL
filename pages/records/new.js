import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
//import 'https://github.com/web3-js/scrypt-shim';
//var scrypt = require('scrypt-shim');
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class NewRecord extends Component {
    state = {
        description: "",
        borrower: "",
        amount: "",
        errorMessage: "",
        loading: false,
        redirectedAddress: ""
    }

    onSubmit = async (event)=> {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            
            await web3.eth.sendTransaction({
                from: accounts[0],
                to: this.state.borrower,
                value: web3.utils.toWei(this.state.amount, 'ether')
            });

            await factory.methods
                .createDebt(web3.utils.toWei(this.state.amount, 'ether'), this.state.borrower, this.state.description)
                .send({from: accounts[0]})
                .then((receipt) => this.setState({ redirectedAddress: receipt.events.ContractCreated.returnValues[0] })
                );
            Router.pushRoute(`/records/${this.state.redirectedAddress}`);
        } catch(err) {
             this.setState({ loading: false, errorMessage: err.message });
        }
        
    }

    render(){
        return (
            <Layout>
              <br/> 
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label> Description</label>
                    <Form.Input width={8} value={this.state.description}
                        onChange={event => this.setState ({ description: event.target.value}) }/>
                        </Form.Field>
                        <Form.Field>
                    <label> Borrower</label>
                    <Form.Input width={8} value={this.state.borrower}
                        onChange={event => this.setState ({ borrower: event.target.value}) }/>
                        </Form.Field>
                        <Form.Field>
                    <label> Amount</label>
                    <Input  label="ETH" width={8}
                        labelPosition="right"
                        value={this.state.amount}
                        onChange={event => this.setState ({ amount: event.target.value}) }/>
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}/>
                <Button loading={this.state.loading} primary> Send </Button>
            </Form>
            </Layout>
        );
    }
}

export default NewRecord;