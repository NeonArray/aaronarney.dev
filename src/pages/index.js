import React from 'react'
import Helmet from 'react-helmet';

import Layout from '../components/layout';


export default () => (
    <Layout>
        <div style={{ marginTop: '75px' }}>
            <Helmet title="Ocular-Rhythm" bodyAttributes={{
                class: 'page-post'
            }} />
            <main data-grid-area="main" style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
                <h1 style={{ lineHeight: '1.25em', fontSize: '2rem' }}>This is a blog about development by and of Aaron Arney, a developer from Louisville, KY.</h1>
                <p>I have a penchant for starting tons of projects and finishing very few of them. In fact, this site is not completely finished either! Fun!</p>

                <p>I built this using <a className="link" href="https://www.gatsbyjs.org" target="_blank" rel="noopener nofollow noreferrer">Gatsby 2.0</a>...it's interesting.</p>
            </main>
        </div>
    </Layout>
);
