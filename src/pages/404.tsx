import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

export default function FourOhFour(): ReactComponentElement<any> {
    return (
        <Layout>
            <Helmet
                title="404 Not Found | Aaron Arney"
                bodyAttributes={{
                    class: "",
                }}
            />
            <main
                data-grid-area="main"
                className="mx-auto mt-20 align-center h-screen text-center max-w-copy"
            >
                <h1>
                    I don&apos;t think this is what you we&apos;re hoping to
                    find. In technical jargon, this is a 404 error.
                </h1>
                <p>
                    You just hit a page that doesn&apos;t exist... the sadness.
                </p>
            </main>
        </Layout>
    );
}
