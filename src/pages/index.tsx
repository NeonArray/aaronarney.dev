import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

// @ts-ignore
import * as photo from "../images/aaron-with-quiet-cropped.jpg";

export default function Index(): ReactComponentElement<any> {
    return (
        <Layout>
            <main style={{ marginTop: "75px" }}>
                <Helmet
                    title="Aaron Arney"
                    bodyAttributes={{
                        class: "page-post",
                    }}
                />
                <div
                    style={{
                        maxWidth: "920px",
                        margin: "0 auto",
                        padding: "0 0.5em",
                    }}
                >
                    <div className="flex">
                        <div className="px-4 py-2 m-2">
                            <img className="rounded-full" src={photo} alt=""/>
                        </div>

                        <div className="px-4 py-2 m-2">
                            <h1 style={{ lineHeight: "1.25em", fontSize: "2rem" }}>
                                This is a blog about development by and of Aaron, a
                                developer from Louisville, KY.
                            </h1>

                            <p>
                                I built this using{" "}
                                <a
                                    className="link"
                                    href="https://www.gatsbyjs.org"
                                    target="_blank"
                                    rel="noopener nofollow noreferrer"
                                >Gatsby
                                </a>{" "}
                                and Tailwind. You can also take a look at the{" "}
                                <a
                                    className="link"
                                    href="https://github.com/ocularrhythm/ocular-rhythm-site"
                                    target="_blank"
                                    rel="noopener nofollow noreferrer"
                                >source code</a>{" "}
                                if you like, though prepare to be unimpressed. I am
                                going to rebuild this site from the ground-up in the
                                coming weeks (bet on it).
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </Layout>
    );
}
