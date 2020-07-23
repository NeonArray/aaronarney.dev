import * as React from "react";
import { ReactComponentElement, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/layout";

// @ts-ignore
import * as photo from "../images/aaron-with-quiet-cropped.jpg";
// @ts-ignore
import * as photoSwap from "../images/aaron-quit-mad.jpg";

export default function Index(): ReactComponentElement<any> {
    const [imgSrc, setImgSrc] = useState(photo);

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
                            <img className="rounded-full" src={imgSrc} alt="Aaron with his cat Quiet" onMouseEnter={() => setImgSrc(photoSwap)} onMouseLeave={() => setImgSrc(photo)}/>
                        </div>

                        <div className="px-4 py-2 m-2">
                            <h1 style={{ lineHeight: "1.25em", fontSize: "2rem" }}>
                                My name is Aaron Arney, and I am a developer in Louisville, KY.
                            </h1>

                            <p>
                                For the past few years I've been the Lead Front-End Developer at LEAP Spark, a small-to-medium size business digital marketing agency. I enjoy all aspects of programming and love trying out new languages, though my first-love is JavaScript. You can check out <Link to="/blog">my blog posts</Link>, some <Link to="/work">selected work</Link> or <Link to="/fun-stuff">things I do for fun</Link>.
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </Layout>
    );
}
