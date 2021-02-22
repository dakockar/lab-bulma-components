import React from "react";

function Message(props) {

    let classList = "message";

    if (props.isInfo) {
        classList += " is-info";
    }

    return (
        <article className={classList}>
            <div className="message-header">
                <p>{props.title}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Message;