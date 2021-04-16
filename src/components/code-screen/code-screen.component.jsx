import React from "react";

import Editor from "@monaco-editor/react";

import "./code-screen.styles.scss";

const CodeScreen = ({ id, roll, code, options, fullScreen }) => {
    return (
        <div
            className="code-screen"
            style={
                fullScreen
                    ? { height: "92%", margin: "1em" }
                    : { height: "auto" }
            }
        >
            <Editor
                className="code-screen-editor"
                height={`${fullScreen ? "100%" : "200px"}`}
                width={`${fullScreen ? "100%" : "300px"}`}
                defaultLanguage="javascript"
                defaultValue={code}
                theme="vs-dark"
                options={options}
            />
            <div className="code-screen-footer">
                {fullScreen ? null : (
                    <div className="code-screen-footer-id">#{id}</div>
                )}
                <div className="code-screen-footer-roll">@{roll}</div>
            </div>
        </div>
    );
};

export default CodeScreen;
