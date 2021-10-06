import React from "react";

const Link = ({ href, className, children }) => {
    const onClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        // event to communicate to Route components that the link has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={onClick} href={href} className={className}>{children}</a>
};

export default Link;