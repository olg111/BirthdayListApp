import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            // не нужно
            filter: ''
            
    
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render(){
        return (
            <input 
            type = "text"
            className = "form-control search-input"
            placeholder = "Search..." 
            value = {this.state.term}
            onChange={this.onUpdateSearch}/>
        )
    }


}

export default SearchPanel;