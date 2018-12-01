import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <div style={{ marginTop: '75px' }}>
            <Helmet title="404 Not Found : Ocular-Rhythm" bodyAttributes={{
                class: ''
            }} />
            <main data-grid-area="main">
                <h1>NOT FOUNDED</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </main>
        </div>
    </Layout>
);
