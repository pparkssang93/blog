import { isValidElement } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Pre({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
    const childProps = isValidElement(children) ? children.props : {};

    let language;

    switch (childProps.className) {
        case "language-js":
            language = "javascript";
            break;
        default:
            language = "";
            break;
    }

    return (
        <SyntaxHighlighter language={language} style={{ ...atomDark }} className="not-prose">
            {childProps.children}
        </SyntaxHighlighter>
    );
}

export default Pre;
