import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import { render } from 'react-dom';
import Layout from '../components/Layout';
import web3 from '../ethereum/web3';

class Dashboard extends Component {
    static async getInitialProps(){
        const debts = await factory.methods.getDeployedDebts().call();
        //const accounts = await web3.eth.getAccounts();
        //console.log(accounts[0])
        return {debts};
    }


    renderDebts () {
        const items = this.props.debts.map (address => {
            return {
                header: address,
                description: <a>View details</a>,
                fluid: true
            };
        });

        return <Card.Group items={items}/>;
    }
    
    render(){
        
        return ( <Layout> 
        <div>
                <h1>Open Debts Ledger</h1>
                <Button
                content="Add Record"
                icon="add circle"
                primary
                /> <br/><br/> </div>
                <div>{this.renderDebts()}</div>
                
                
                </Layout>
        );
    }
}

export default Dashboard;