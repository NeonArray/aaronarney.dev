import React from 'react'
import Helmet from 'react-helmet';

import Layout from '../components/layout';

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'page-post'
                }} />
                <main data-grid-area="main" className="post-copy max-w-copy" style={{ margin: '0 auto', padding: '0 2em' }}>
                    <h1>Privacy Policy for www.ocular-rhythm.io</h1>

                    <p>At Ocular-Rhythm, accessible from www.ocular-rhythm.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ocular-Rhythm and how we use it.</p>

                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at privacy@ocular-rhythm.com</p>

                    <h2>Log Files</h2>

                    <p>Ocular-Rhythm follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.</p>

                    <h2>Privacy Policies</h2>

                    <p>We do not collect information such as your computer’s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. All data collected is aggregate data without personal information (this is the whole reason Fathom Analytics exists).</p>

                    <p>We do not use and store information about your location.</p>

                    <h2>Use of Data</h2>

                    <ul>
                        <li>To gather analysis or valuable information so that we can improve our website</li>
                        <li>To monitor the usage of our website</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>

                    <h2>Third Party Privacy Policies</h2>

                    <p>Ocular-Rhythm’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>

                    <h2>Our Policy on &quot;Do Not Track&quot; Signals under the California Online Protection Act (CalOPPA)</h2>

                    <p>We support Do Not Track (&quot;DNT&quot;). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.</p>

                    <p>You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.</p>

                    <h2>Analytics</h2>

                    <p>We use Fathom Analytics for website analytics.</p>

                    <h2>Childrens Information</h2>

                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

                    <h2>Online Privacy Policy Only</h2>

                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Ocular-Rhythm. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                    <h2>Consent</h2>

                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                </main>
            </div>
        </Layout>
    );
}
