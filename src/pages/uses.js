import React from 'react'
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';

export default function Uses() {
    return (
        <Layout>
            <main data-grid-area="main" style={{ marginTop: '75px' }}>
                <Helmet title="Ocular-Rhythm" bodyAttributes={{
                    class: 'page-post'
                }} />
                <div className="stack" style={{ maxWidth: '920px', margin: '0 auto', padding: '0 0.5em' }}>
                    <h1>Uses</h1>

                        <p>Inspired by the website <a className="link" href="https://uses.tech/">Uses.tech</a>, I decided to jot down the
                            various tech I use every day.</p>


                    <div className="">
                        <div>
                            <h2>Hardware</h2>
                            <ul>
                                <li>Alienware Aurora A6 PC
                                    <ul>
                                        <li>Windows 10 Pro</li>
                                        <li>Nvidia GeForce GTX 1080</li>
                                        <li>32 GB RAM</li>
                                        <li>Etc.</li>
                                    </ul>
                                </li>
                                <li>13″ MacBook Pro 2015</li>
                                <li>15″ iPad Pro 2019</li>
                                <li>15″ MacBook Pro 2015</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Software (Shared between PC and Mac)</h2>
                            <ul>
                                <li>JetBrains suite of IDE’s as my primary code editors. Mostly I use PHPStorm, Rider,
                                    Android Studio, and Clion. I just haven’t been satisfied with VS Code, Visual Studio,
                                    Sublime, etc. as a replacement for these IDE’s. The features and DX are just too good.
                                    Not to mention the code completion and intelli-sense is just so much better.
                                    <ul>
                                        <li>Plugins
                                            <ul>
                                                <li>.env support</li>
                                                <li>BashSupport</li>
                                                <li>CodeGlance</li>
                                                <li>Dart</li>
                                                <li>EditorConfig</li>
                                                <li>IDEA Mind Map</li>
                                                <li>IdeaVim</li>
                                                <li>JS GraphQL</li>
                                                <li>JSON Sorter</li>
                                                <li>Laravel</li>
                                                <li>Makefile Support</li>
                                                <li>Material Theme UI</li>
                                                <li>PHP Annotations</li>
                                                <li>PHP RegExp Support</li>
                                                <li>PostCSS Support</li>
                                                <li>Symfony</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>VS Code for one-off edits or writing markdown. I also tend to use this over all other
                                    apps for taking notes.
                                    <ul>
                                        <li>Plugins
                                            <ul>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=anthonydiametrix.ACF-Snippet">ACF-Snippets</a>
                                                </li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-apache">Apache
                                                    Conf</a></li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag">Auto
                                                    Close Tag</a></li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml">Better
                                                    TOML</a></li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-previewink">Browser
                                                    Preview</a></li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptoolsink:">C/C++</a>
                                                </li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharpC/C++">C#</a>
                                                </li>
                                                <li><a
                                                    className="link" href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-community-material-theme">Community
                                                    Material Theme</a></li>
                                                <li>Cyberpunk Theme</li>
                                                <li>Dark++ Italic Theme</li>
                                                <li>Dark++ Theme</li>
                                                <li>Dart</li>
                                                <li>Debugger for Unity</li>
                                                <li>Docker</li>
                                                <li>Editorconfig</li>
                                                <li>Elm</li>
                                                <li>ES7 React/Redux/GraphQL/React-Native</li>
                                                <li>Flutter</li>
                                                <li>Go</li>
                                                <li>HTML CSS Support</li>
                                                <li>JS Patterns Snippets</li>
                                                <li>Material Theme</li>
                                                <li>Material Theme Icons</li>
                                                <li>NPM Intellisense</li>
                                                <li>PHP Debug</li>
                                                <li>PHP Extensions Pack</li>
                                                <li>PHP Intelephense</li>
                                                <li>PHP Intellisense</li>
                                                <li>PHPCS</li>
                                                <li>PostCSS Syntax</li>
                                                <li>Python</li>
                                                <li>SASS</li>
                                                <li>Settings Sync</li>
                                                <li>Shades of Purple</li>
                                                <li>Holy shit, almost there</li>
                                                <li>Smarty</li>
                                                <li>Twig</li>
                                                <li>VSCode Great Icons</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>VIM. This one scared me for the longest time. I decided to exclusively use it as my text
                                    editor for a week just so I would be able to be somewhat capable in it. I ended up
                                    really loving it and tend to use it pretty often. Highly recommend others do the same.
                                    This becomes especially handy when editing files via SSH. <ul>
                                        <li>Plugins
                                            <ul>
                                                <li><a className="link" href="https://github.com/VundleVim/Vundle.vim">vundle</a> – a bundle
                                                    manager for VIM, kind of like composer or npm
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/emmet-vim">emmet-vim</a> – Emmet
                                                    completion
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/vim-javascript">vim-javascript</a> –
                                                    JS syntax highlighting
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/html5-vim">html5vim</a> – HTML5 +
                                                    inline SVG omnicomplete function, indent and syntax for Vim. Based on
                                                    the default htmlcomplete.vim.
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/better-css-syntax-for-vim">vim-css3-syntax</a> –
                                                    CSS3 syntax (and syntax defined in some foreign specifications) support
                                                    for <a className="link" href="http://www.vim.org/">Vim</a>’s
                                                    built-in <code>syntax/css.vim</code></li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/vim-airline-superman">vim-airline</a> –
                                                    Lean &amp; mean status/tabline for vim that’s light as air.
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/vim-airline-themes">vim-airline-themes</a> –
                                                    A collection of themes for vim-airline.
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/surround-vim">vim-surround</a> –
                                                    Easily surround text with quotes or whatever.
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/php-vim-shouldve-said-no">php</a> –
                                                    PHP syntax highlighting
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/typescript-vim">typescript-vim</a> –
                                                    TypeScript syntax highlighting
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/vim-jst">vim-jst</a> – JST/EJS
                                                    syntax highlighting
                                                </li>
                                                <li><a
                                                    className="link" href="https://vimawesome.com/plugin/editorconfig-vim">editorconfig-vim</a> –
                                                    Enables .editorconfig
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/elm-vim-sparks-fly">elm-vim</a> –
                                                    Elm syntax highlighting
                                                </li>
                                                <li><a className="link" href="https://vimawesome.com/plugin/dash-vim">dash-vim</a> – Search
                                                    Dash docs from within VIM
                                                </li>
                                            </ul>
                                        </li>
                                    </ul></li>
                                <li>Docker</li>
                                <li>Snagit</li>
                                <li>Spotify</li>
                                <li>Gitkraken</li>
                                <li>Slack</li>
                                <li>Blisk</li>
                                <li>Firefox Developer Edition</li>
                                <li>Balsamiq Mockups 3</li>
                                <li>SortSite</li>
                                <li>Filezilla</li>
                                <li>Postman</li>
                                <li>Photoshop CC</li>
                                <li>MySQL Workbench</li>
                                <li>Unity</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Software (Mac Specific)</h2>
                            <ul>
                                <li>iTerm2</li>
                                <li>Alfred</li>
                                <li>Dash</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Software (PC Specific)</h2>
                            <ul>
                                <li>Cmder</li>
                                <li>Texture Packer/Sprite Illuminator/Physics Editor</li>
                                <li>Fork</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Platforms</h2>
                            <ul>
                                <li>Github</li>
                                <li>Gitlab</li>
                                <li>Azure</li>
                                <li>Heroku</li>
                                <li>Netlify</li>
                                <li>Sentry.io</li>
                                <li>WordPress</li>
                                <li>Shopify</li>
                                <li>Browerstack</li>
                                <li>HubSpot</li>
                                <li>Sketch/Zeplin</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Other Web-based Tools</h2>
                            <ul>
                                <li><a className="link" href="https://securityheaders.com/">HTTP Header Check</a></li>
                                <li><a className="link" href="http://www.phpliveregex.com/">PHP Live Regex</a></li>
                                <li><a className="link" href="https://tinypng.com/">TinyPNG</a></li>
                                <li><a className="link" href="https://3v4l.org/">PHP Benchmark Editor</a></li>
                                <li><a className="link" href="https://www.mockaroo.com/">Mockaroo – SQL Dummy Data</a></li>
                                <li><a className="link" href="https://send.firefox.com/">Firefox Send</a></li>
                                <li><a className="link" href="https://www.draw.io/">Draw.io</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2>Game Development Tools</h2>
                            <ul>
                                <li>Phaser 3</li>
                                <li>Unity</li>
                                <li>TexturePacker</li>
                                <li>PhysicsEditor</li>
                                <li>SpriteIlluminator</li>
                                <li>Photoshop</li>
                                <li>Blender</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
