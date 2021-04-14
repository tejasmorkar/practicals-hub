import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";
import HubsPage from "./pages/hubs/hubs.component";
import PrivatePage from "./pages/private/private.component";
import InstructionsPage from "./pages/instructions/instructions.component";
import SettingsPage from "./pages/settings/settings.component";

import Header from "./components/header/header.component.jsx";
import Sidebar from "./components/sidebar/sidebar.component";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            activatedItem: 1,
        };
    }

    render() {
        return (
            <div>
                <Header className="header" />
                <div className="main-container">
                    <Sidebar
                        className="sidebar"
                        activatedItem={this.state.activatedItem}
                    />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/hubs" component={HubsPage} />
                        <Route path="/private" component={PrivatePage} />
                        <Route
                            path="/instructions"
                            component={InstructionsPage}
                        />
                        <Route path="/settings" component={SettingsPage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
