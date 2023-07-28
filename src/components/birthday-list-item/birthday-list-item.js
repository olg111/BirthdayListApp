
import './birthday-list-item.css';

const BirthdayListItem = (props) => {
  

        const{name, birthday, onDelete, onToggleProp, message, gift1  } = props;
        
        
        let classNames = "list-group-item d-flex justify-content-between";
            if(message){
                classNames += " increase"  // ????
            }
        
            if(gift1){
                classNames += " like"   //????
            }


    return (
        <li className={classNames}>
            <span className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="gift1">
                {name} 
            </span> 
            <input type="text" className="list-group-item-input" defaultValue={birthday}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-message btn-sm "
                    onClick={onToggleProp}
                    data-toggle="message">
                    <i className="fas fa-message"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fa fa-gift"></i>   
            </div>
        </li>
    )
    }

    


export default BirthdayListItem;