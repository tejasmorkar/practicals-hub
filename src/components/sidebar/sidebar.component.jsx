import React from "react";
import { withRouter } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/home.svg";
import { ReactComponent as HubsLogo } from "../../assets/hub.svg";
import { ReactComponent as PrivateLogo } from "../../assets/private.svg";
import { ReactComponent as InstructionsLogo } from "../../assets/instructions.svg";
import { ReactComponent as SettingsLogo } from "../../assets/settings.svg";

import "./sidebar.styles.scss";

const Sidebar = ({ location, history }) => {
    let activatedItemString = location.pathname.substring(1);
    let res = activatedItemString.indexOf("/");

    if (res !== -1) {
        activatedItemString = activatedItemString.substring(0, res);
    }

    const items = {
        "/": 1,
        "/hubs": 2,
        "/private": 3,
        "/instructions": 4,
        "/settings": 5,
    };

    const activatedItem = items[`/${activatedItemString}`];

    return (
        <div className="sidebar">
            <div
                className={`${
                    activatedItem === 1 ? "activated" : ""
                } sidebar-1`}
                onClick={() => history.push("/")}
            >
                <HomeLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 2 ? "activated" : ""
                } sidebar-2`}
                onClick={() => history.push("/hubs")}
            >
                <HubsLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 3 ? "activated" : ""
                } sidebar-3`}
                onClick={() => history.push("/private")}
            >
                <PrivateLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 4 ? "activated" : ""
                } sidebar-4`}
                onClick={() => history.push("/instructions")}
            >
                <InstructionsLogo className="logo" />
            </div>
            <div
                className={`${
                    activatedItem === 5 ? "activated" : ""
                } sidebar-5`}
                onClick={() => history.push("/settings")}
            >
                <SettingsLogo className="logo" />
            </div>
        </div>
    );
};

export default withRouter(Sidebar);
