import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ( { language, text } ) => {

    const [translated, setTranslated] = useState( '' );
    const [debouncedText, setDebouncedText] = useState(text);


    useEffect( () => {
        const timeoutId = setTimeout( () => {
            setDebouncedText( text );
        }, 1000 );

        return () => {
            clearTimeout( timeoutId );
        }
    }, [text] );

    // whenever debouncedText or language changes, make request to api
    useEffect(() => {
        const getTranslation = async () => {
            const response = await axios.post( 'https://translation.googleapis.com/language/translate/v2', {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        source: 'en',
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }
            );
            const translations = response.data.data.translations;
            setTranslated( translations[0].translatedText )
        };

        if (debouncedText.trim()) getTranslation();

    }, [debouncedText, language])


    return (
        <div className="content">
            <h3>{translated}</h3>
        </div>
    );

}

export default Convert;