import { useState } from "react";
import "./App.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const markdownTextDefault = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
function App() {
    const [markdownText, setMarkdownText] = useState(markdownTextDefault);
    return (
        <>
            <div className="container-fluid text-white mt-4">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Markdow Previewer</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <textarea
                            id="editor"
                            value={markdownText}
                            onChange={(e) => setMarkdownText(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div id="preview">
                            <ReactMarkdown>{markdownText}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="attribution">
                <a
                    href="https://github.com/NickGV"
                    target="_blank"
                    rel="noreferrer"
                >
                    by NickGV
                </a>
                <br />
                <a
                    href="https://github.com/NickGV/markdown-previewer"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </>
    );
}

export default App;
