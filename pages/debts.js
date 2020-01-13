import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { render } from 'react-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    async componentDidMount() {
        const debts = await factory.methods.getDeployedDebts().call();
        console.log(debts);     
    }
    render(){
        return ( <div> 
                <h1>Welcome to the Dashboard!</h1>
                </div>
        );
    }
}

export default Dashboard;