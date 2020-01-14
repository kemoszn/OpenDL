import React from 'react';
import { Menu } from 'semantic-ui-react';


export default () => {
    return (
        <Menu style={{marginTop: "10px"}}>
            <Menu.Item>
            <h2>Ξ OpenDL </h2>
            </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
               <h4> About OpenDL </h4>
                </Menu.Item>
                <Menu.Item>
               <h4> Records </h4>
                </Menu.Item>
            </Menu.Menu>

        </Menu>
    );
}