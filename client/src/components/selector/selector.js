import React  from 'react';
import Select from 'react-select';
import './selector.css';


const options = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' }

]


const Selector = (props) => {

    return(
        <Select 
        className='app-selector'
        value={props.selectorMonth}
        options={options}
        onChange={props.onChange} 
        />
    )

}

export default Selector;









