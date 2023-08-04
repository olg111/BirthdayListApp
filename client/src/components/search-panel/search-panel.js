import { useCallback, useState } from 'react';
import './search-panel.css';

function SearchPanel (props) {


    const [term, setTerm] = useState('')


    const onUpdateSearch = useCallback((e) =>{

        setTerm(e.target.value)
        props.onUpdateSearchApp(e.target.value);
    }, [props])

    
    return (
        <input 
            type = "text"
            data-testid="Search-Input"
            className = "form-control search-input"
            placeholder = "Search..." 
            value = {term}
            onChange={onUpdateSearch}
        />
    )
    


}

export default SearchPanel;