import { useMemo } from "react";
import Selector from "../selector/selector";
import "./app-filter.css";


const buttonsData = [
    {name: 'all', label: 'All people'},
    {name: 'gift1', label: 'Presents'},
    {name: 'congratulate', label: 'Congratulations'},       
];

const AppFilter = (props) => {



    const buttons = useMemo( () => {
        return buttonsData.map(({name, label}) => {   
            const active = props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => props.onFilterSelect(name)}>
                        {label}
                </button>
            )
        })
    }, [props] )


    return (
        <div className="btn-group">
            {buttons}
            <Selector 
                selectorMonth = {props.selectorMonth}
                onChange={(value) => {
                    props.onFilterSelect(`month:${value.value}`)
                    props.onSelectorMonth(value)
                    
                }}/>
        </div>

    )
}

export default AppFilter;