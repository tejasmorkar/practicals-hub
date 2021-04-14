import React from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo height="54px" width="54px" />
                <span style={{ fontSize: "1.5em", margin: "0 1em" }}>
                    Practicals Hub
                </span>
            </header>
        </div>
    );
}

export default App;
