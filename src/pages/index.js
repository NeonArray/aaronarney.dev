import React from 'react'
import Helmet from 'react-helmet';

import Layout from '../components/layout';


export default function Index() {
    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'page-post'
                }} />
                <main data-grid-area="main" style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
                    <h1 style={{ lineHeight: '1.25em', fontSize: '2rem' }}>This is a blog about development by and of Aaron Arney, a developer from Louisville, KY.</h1>

                    <p>I am currently a Front-End Developer at <a className="link" href="https://leapsparkagency.com" target="_blank" rel="noopener nofollow noreferrer">Leap Spark Agency</a>, a digital marketing company.</p>

                    <p>I built this using <a className="link" href="https://www.gatsbyjs.org" target="_blank" rel="noopener nofollow noreferrer">Gatsby 2.0</a> like every other developer. You can also take a look at the <a className="link" href="https://github.com/ocularrhythm/ocular-rhythm-site" target="_blank" rel="noopener nofollow noreferrer">source code</a> if you like.</p>
                </main>
            </div>
        </Layout>
    );
}
