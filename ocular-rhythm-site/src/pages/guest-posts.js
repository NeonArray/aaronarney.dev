import React from 'react'
import Helmet from 'react-helmet';

import Archive from '../components/archive/index';
import Layout from '../components/layout';


export default function GuestPosts() {

    const edges = [
        { node: { frontmatter: { title: 'Refactoring JavaScript', date: '2018-10-18', path: 'https://www.leapsparkagency.com/blog/leap-spark/2018/10/17/refactoring-javascript', category: 'web' } } },
        { node: { frontmatter: { title: 'Accessibility Compliance', date: '2018-12-12', path: 'https://www.leapsparkagency.com/blog/leap-spark/2018/12/12/accessibility-compliance', category: 'web' } } },
        { node: { frontmatter: { title: 'Creating a Simple Game with Phaser', date: '2019-02-13', path: 'https://www.leapsparkagency.com/blog/leap-spark/2019/02/13/creating-a-simple-game-with-phaser', category: 'web' } } },
        { node: { frontmatter: { title: 'Migrating from SASS to PostCSS', date: '2019-03-18', path: 'https://www.leapsparkagency.com/blog/leap-spark/2019/03/18/migrating-from-sass-to-postcss', category: 'web' } } },
        { node: { frontmatter: { title: 'What is Personalization', date: '2019-07-30', path: 'https://www.progress.com/blogs/what-is-personalization', category: 'web' } } },
        { node: { frontmatter: { title: 'Regular Expressions for Regular People', date: '2019-02-07', path: 'https://alligator.io/js/regular-expressions-for-regular-people/', category: 'web' } } },
    ];

    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'archive'
                }} />

                <Archive centered={ true } posts={ edges } />
            </div>
        </Layout>
    );
}
