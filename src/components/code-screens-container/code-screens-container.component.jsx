import React from "react";

import CodeScreen from "../code-screen/code-screen.component";

import "./code-screens-container.styles.scss";

class CodeScreensContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            options: {
                wordWrap: "on",
                fontSize: 10,
                minimap: {
                    enabled: false,
                },
            },
            codeScreenValues: [
                {
                    roll: "TECOB201",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB202",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB203",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
                {
                    roll: "TECOB205",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB206",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB207",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
                {
                    roll: "TECOB208",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB209",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB211",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
                {
                    roll: "TECOB212",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB213",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB215",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
                {
                    roll: "TECOB216",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB217",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB218",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
                {
                    roll: "TECOB219",
                    code: `// Hello World`,
                },
                {
                    roll: "TECOB220",
                    code: `const a = () => {
    console.log('Hello World')
}`,
                },
                {
                    roll: "TECOB221",
                    code: `const b = () => {
    alert('Hello World')
}`,
                },
            ],
        };
    }

    render() {
        const { options, codeScreenValues } = this.state;
        return (
            <div className="code-screens-container">
                {codeScreenValues.map(({ id, roll, code }, index) => (
                    <CodeScreen
                        key={index + 1}
                        id={index + 1}
                        roll={roll}
                        code={code}
                        options={options}
                    />
                ))}
            </div>
        );
    }
}

export default CodeScreensContainer;
