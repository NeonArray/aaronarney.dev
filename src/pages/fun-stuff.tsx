import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

// @ts-ignore
import * as screenshot from "../images/uniball-redux.jpg";

export default function FunStuff(): ReactComponentElement<any> {
    return (
        <Layout>
            <main style={{ marginTop: "75px" }}>
                <Helmet
                    title="Ocular-Rhythm"
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
                    <h1>Fun Stuff</h1>

                    <div className="flex flex-col md:flex-row gap-8">
                        <figure className="">
                            <img src={screenshot} alt="" className="" />
                        </figure>
                        <div className="">
                            <h3>Uniball Redux</h3>

                            <p>
                                <em>Phaser JS</em>
                            </p>

                            <p>
                                This was a small game that is an iteration of
                                Uniball, a game I created for a blog post. This
                                version has better graphics and mechanics. I
                                want to port this to other engines just to play
                                around. Like Godot, pure C/C++, or other JS
                                engines.
                            </p>

                            <p>
                                Play the{" "}
                                <a
                                    className="link"
                                    href="https://uniball-redux.netlify.app/"
                                >
                                    game on Netlify, here.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
