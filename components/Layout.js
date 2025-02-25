import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default props => {
    return (
        <Container> 
        <Head>
         <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>
        <Header/>
        {props.children}

         {/*<h3 style={{marginBottom: '0'}}>OpenDL®. All rights reserved 2020</h3> */}
        </Container>
    );

}