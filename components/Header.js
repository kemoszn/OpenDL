import React from 'react';
import { Menu, Image, Header } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{marginTop: "10px"}}>
            <Menu.Menu position="left">
            <Link route="/">
            <a className="item">
                <Header as='h2'>
                
                <Image style={{backgroundColor: 'transparent'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/256px-Ethereum_logo_2014.svg.png"
                size="mini" inline="true">
                </Image>OpenDL
                 </Header> </a>
            </Link>
            </Menu.Menu>
               
            <Menu.Menu position="right">
                <Link route="/about">
                <a className="item"><h3>About OpenDL</h3></a>
            </Link>
                <Link route="/records">
                <a className="item"><h3>Records</h3></a>
            </Link>
            </Menu.Menu>

        </Menu>
    );
}