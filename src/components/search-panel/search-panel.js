import { useState } from 'react';
import './search-panel.css';

function SearchPanel (props) {
    // eslint-disable-next-line no-useless-constructor

    const [term, setTerm] = useState('')


    // onUpdateSearch = (e) =>{
    //     const term = e.target.value;
    //     this.setState({term});
    //     this.props.onUpdateSearch(term);
    // }

    const onUpdateSearch = (e) =>{
        setTerm(e.target.value)
        props.onUpdateSearchApp(e.target.value);
    }

    
    return (
        <input 
            type = "text"
            className = "form-control search-input"
            placeholder = "Search..." 
            value = {term}
            onChange={onUpdateSearch}
        />
    )
    


}

export default SearchPanel;