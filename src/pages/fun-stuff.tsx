import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

// @ts-ignore
import * as screenshot from "../images/uniball-redux.jpg";
// @ts-ignore
import * as noSceneScreenshot from "../images/no-scene.jpg";

export default function FunStuff(): ReactComponentElement<any> {
    return (
        <Layout>
            <main style={{ marginTop: "75px" }}>
                <Helmet
                    title="Fun Stuff | Aaron Arney"
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


                    <div className="max-w-sm w-full lg:max-w-full lg:flex my-8">
                        <div
                            className="h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{ backgroundImage: `url(${screenshot})` }} title="Uniball Redux">
                        </div>
                        <div
                            className="bg-black-lighter rounded-b lg:rounded-b-none lg:rounded-r px-4 py-12 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-white font-bold text-xl mb-2">
                                    <h3>Uniball Redux</h3>
                                </div>
                                <p className="text-white text-base">This was a small game that is an iteration of
                                    Uniball, a game I created for a blog post. This
                                    version has better graphics and mechanics. I
                                    want to port this to other engines just to play
                                    around. Like Godot, pure C/C++, or other JS
                                    engines.</p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <a
                                        className="link"
                                        href="https://uniball-redux.netlify.app/"
                                    >
                                        Play the game here.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm w-full lg:max-w-full lg:flex my-8">
                        <div
                            className="h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{ backgroundImage: `url(${noSceneScreenshot})` }} title="No-Scene Zine">
                        </div>
                        <div
                            className="bg-black-lighter rounded-b lg:rounded-b-none lg:rounded-r px-4 py-12 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-white font-bold text-xl mb-2">
                                    <h3>No-Scene Zine</h3>
                                </div>
                                <p className="text-white text-base">No-Scene zine is a dumb zine my girlfriend, a best friend, and myself create. So far we've done 2 issues and I created a (intentionally) horribly designed website.</p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <a
                                        className="link"
                                        href="https://www.noscenezine.com/"
                                    >
                                        Check out the site here.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
