import React from 'react'
import Helmet from 'react-helmet';

import Layout from '../components/layout'

export default () => {
    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'archive'
                }} />
            </div>
        </Layout>
    );
};

