import React from "react";
import CodeScreen from "../../components/code-screen/code-screen.component";

import "./private.styles.scss";

class PrivatePage extends React.Component {
    constructor() {
        super();
        this.state = {
            roll: "TECOB221",
            options: { minimap: { enabled: true } },
            code: `// Hello World

let greeting = "Hello";
const greet = greeting => {
    console.log(\`\${greeting} World!\`)
}
`,
        };
    }

    render() {
        const { roll, options, code } = this.state;
        return (
            <div className="private-page page">
                <CodeScreen
                    roll={roll}
                    options={options}
                    code={code}
                    fullScreen
                />
            </div>
        );
    }
}

export default PrivatePage;
