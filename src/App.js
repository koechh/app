import React  from "react";
// import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
// import Search from "./components/Search";
// import Dropdown from "./components/Dropdown";
import Data from "./Data";
// import Route from "./components/Route";
// import Header from "./components/Header";

const App = () => {
    const toggleItems = Data.toggleItems
    // const languages = Data.languages;
    // const dropdownOptions = Data.dropdownOptions;
    // const [selected, setSelected] = useState( dropdownOptions[0] );
    // const [showDropdown, setShowDropdown] = useState( true )

    return (
        /*
        <div>
            <Header />
            <Route path="/"><Accordion items={toggleItems} /></Route>
            <Route path="/search"><Search/></Route>
            <Route path="/translate"><Translate languages={languages}/></Route>
            <Route path="/dropdown">
                <div>
                    <button style={{ marginBottom: '10px' }} onClick={() => setShowDropdown( !showDropdown )}>Toggle
                        Dropdown
                    </button>
                    {showDropdown ?
                        <Dropdown
                            selected={selected}
                            onSelectedChange={setSelected}
                            options={dropdownOptions}
                        />
                        : null
                    }
                </div>
            </Route>
        </div>
*/
        <div>
            <Accordion items={toggleItems} />
        </div>
    );
}

export default App;
