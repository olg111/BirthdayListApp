import BirthdayListItem from '../birthday-list-item/birthday-list-item';
import './birthday-list.css';

const BirthdayList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item =>{
        const {id, ...itemProps} = item;
        return(
           // <EmployeesListItem name = {item.name} salary={item.salary} />
           <BirthdayListItem key={id} 
           {...itemProps}
           onDelete ={() => onDelete(id)}
           onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default BirthdayList;