import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';


export default function FourOhFour() {
    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="404 Not Found : Ocular-Rhythm" bodyAttributes={{
                    class: ''
                }} />
                <main data-grid-area="main" style={{ margin: '0 auto', maxWidth: '920px', textAlign: 'center' }}>
                    <h1>I don&apos;t think this is what you we&apos;re hoping to find. In technical jargon, this is a 404 error.</h1>
                    <p>You just hit a page that doesn&apos;t exist... the sadness.</p>
                </main>
            </div>
        </Layout>
    );
}
