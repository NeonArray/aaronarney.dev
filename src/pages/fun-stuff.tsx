import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

// @ts-ignore
import * as screenshot from "../images/uniball-redux.jpg";
// @ts-ignore
import * as noSceneScreenshot from "../images/no-scene.jpg";
// @ts-ignore
import * as memorymatch from "../images/memory-match-unity.jpg";

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
                <div className="stack max-w-screen-lg mx-auto">
                    <h1 className="mb-20 block">Fun Stuff</h1>

                    <div className="max-w-sm w-full lg:max-w-full lg:flex my-8">
                        <div
                            className="h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            style={{ backgroundImage: `url(${memorymatch})` }} title="Memory Match">
                        </div>
                        <div
                            className="bg-black-lighter rounded-b lg:rounded-b-none lg:rounded-r px-4 py-12 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-white font-bold text-xl mb-2">
                                    <h3>Memory Match</h3>
                                </div>
                                <p className="text-white text-base">
                                    Memory Match is a game I built in Unity one weekend. I used asset packs that I had purchased previously, but built out 
                                    some custom shaders and other assets. Overall it was pretty fun to build because it did offer a few challenges. I had 
                                    never used Unity's WebGL export so that was also really cool to try out.
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="text-sm">
                                    <a
                                        className="link"
                                        href="https://memory-match-unity.netlify.app/"
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
