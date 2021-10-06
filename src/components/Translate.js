// google API key:
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = ({ languages }) => {
    const [language, setLanguage] = useState( languages[0] )
    const [text, setText] = useState( '' );


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        style={{ marginBottom: '20px' }}
                        value={text}
                        onChange={( e ) => setText( e.target.value )}
                    />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                onSelectedChange={setLanguage}
                options={languages}
                selected={language}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    );
}

export default Translate;