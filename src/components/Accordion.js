import React, {useState, Fragment} from "react";

const Accordion = ({items}) => {
    // initialize a new state
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
        // if (index === activeIndex)
        //     activeClass = " index";
    }

    const renderItems = items.map(({title, content}, index) => {
        const activeClass = index === activeIndex ? `active`: '';
        return (
            <Fragment key={title}>
                <div className={`title ${activeClass}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"/>
                    {title}
                </div>
                <div className={`content ${activeClass}`}>
                    <p>{content}</p>
                </div>
            </Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderItems}
        </div>
    )
}

export default Accordion;