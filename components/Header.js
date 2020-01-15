import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{marginTop: "10px"}}>
            <Link route="/">
                <a className="item"><h2>Ξ OpenDL </h2></a>
            </Link>

            <Menu.Menu position="right">
                <Link route="/about">
                <a className="item"><h4>About OpenDL</h4></a>
            </Link>
                <Link route="/records">
                <a className="item"><h4>Records</h4></a>
            </Link>
            </Menu.Menu>

        </Menu>
    );
}