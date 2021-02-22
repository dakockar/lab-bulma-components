import React from "react";

function CoolButton(props) {
    let classList = "button ";

    if (props.className) {
        classList += props.className;
    }

    if (props.isDanger) {
        classList += " is-danger";
    }
    if (props.isSmall) {
        classList += " is-small";
    }
    if (props.isSuccess) {
        classList += " is-success";
    }

    return (
        <button className={classList}>{props.children}</button>
    )
}

export default CoolButton;