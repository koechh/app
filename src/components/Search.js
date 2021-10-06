import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');

    //set @debounceTerm initial value to @terms initial value
    const [debounceTerm, setDebounceTerm] = useState(term)

    const [results, setResults] = useState([]);

    // use @debounceTerm's initial value to fetch first request
    // If timeout NOT cancelled fetch results using @debounceTerm
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        origin: '*',
                        action: 'query',
                        list: 'search',
                        srsearch: debounceTerm,
                        format: 'json',
                        prop: 'info',
                        inprop: 'url'
                    }
                }
            );

            const fetchedResults = response.data.query.search;
            setResults(fetchedResults);
        }

        if (debounceTerm.trim()) fetchData();

    }, [debounceTerm]);

    // set timer to update @debounceTerm (whenever term is updated)
    useEffect(() => {

        const timeoutId = setTimeout( () => {
            setDebounceTerm(term);
        }, 1000);

        // cancel timer whenever @term is newly updated, with cleanup function
        return () => {
            clearTimeout(timeoutId);
        }

    }, [term]);

    const renderedResults = results.map(({pageid, title, snippet}) => {
        return (
            <div key={pageid} className="item">
                <div className="right floated content">
                    <a
                        href={`http://en.wikipedia.org/?curid=${pageid}`}
                        className="ui button"
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <span dangerouslySetInnerHTML={{__html: snippet}}/>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        className="input"
                        onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;