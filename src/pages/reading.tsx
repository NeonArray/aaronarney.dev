import * as React from "react";
import { ReactComponentElement } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";

const style = require("./reading.module.css");

export default function Reading(): ReactComponentElement<any> {
    return (
        <Layout>
            <main style={{ marginTop: "75px" }}>
                <Helmet
                    title="Reading | Aaron Arney"
                    bodyAttributes={{
                        class: "page-post",
                    }}
                />
                <div className="stack max-w-screen-lg mx-auto">
                    <h1 className="mb-20 block">Reading</h1>

                    <p>
                        These are a few of the books I've read (some or all of).
                        I have a tendency to not finish books but instead either
                        become bored or distracted and move on to something
                        else. Most of these I've finished though.
                    </p>

                    <p> ★ = Favorites</p>

                    <h3>Technology</h3>
                    <ul className={style.books}>
                        <li>
                            <a href="https://www.indiebound.org/book/9780735619678">
                                Code Complete - Steve McConnell
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9781612194578">
                                Ada's Algorithm - James Essinger
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780470084113">
                                About Face: The Essentials of Interaction Design
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9781501121746">
                                Sprint - Jake Knapp, John Zeratsky, Braden Kowitz
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780596007126">
                                Head First Design Patterns - Eric Freeman, Elisabeth Robson, Bert Bates
                            </a>
                        </li>
                        <li>
                            <a href="http://atomicdesign.bradfrost.com/">
                                Atomic Design - Brad Frost
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780321965516">
                                Don't Make Me Think - Steve Krug
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9781118008188">
                                HTML &amp; CSS Design and build websites - John Duckett
                            </a>
                        </li>
                    </ul>

                    <h3>Psychology or Brain Thangs</h3>
                    <ul className={style.books}>
                        <li>
                            <a href="https://www.indiebound.org/book/9780812981605">
                                The Power of Habit - Charles Duhigg
                            </a> ★
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780374533557">
                                Thinking Fast and Slow - Daniel Kahneman
                            </a>
                        </li>
                    </ul>

                    <h3>History</h3>
                    <ul className={style.books}>
                        <li>
                            <a href="https://www.indiebound.org/book/9780671447540">
                                Mornings on Horseback - David McCullough
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9781328915344">
                                Blitzed: Drugs in the Third Reich - Norman Ohler, Shaun Whiteside
                            </a>
                        </li>
                        <li>
                            <a href="https://www.onevoicetwolives.com/product/one-voice-two-lives-book/">
                                One Voice, Two Lives - David S. Wisnia
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9781501179402">
                                Band of Brothers - Stephen E. Ambrose
                            </a> ★
                        </li>
                    </ul>

                    <h3>Science</h3>
                    <ul className={style.books}>
                        <li>
                            <a href="https://www.indiebound.org/book/9780393339918">
                                Packing for Mars - Mary Roach
                            </a> ★
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780393354379">
                                Grunt - Mary Roach
                            </a>
                        </li>
                    </ul>

                    <h3>Video Games</h3>
                    <ul className={style.books}>
                        <li>
                            <a href="  Blood, Sweat, and Pixels ">
                                Blood, Sweat, and Pixels - Jason Schreier
                            </a>
                        </li>
                        <li>
                            <a href="https://www.indiebound.org/book/9780812972153">
                                Masters of DOOM - David Kushner
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </Layout>
    );
}
