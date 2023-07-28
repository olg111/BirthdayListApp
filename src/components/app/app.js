import { useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BirthdayList from '../birthday-list/birthday-list';
import BirthdayAddForm from '../birthday-add-form/birthday-add-form';


import './app.css';

function    App(props) {

    const [myData, setMyData] = useState([
        {name: "Mom", birthday: 800, messege: false, gift1: true, id: 1},
        {name: "Dad", birthday: 1000, messege: true, gift1: false, id: 2},
        {name: "My cat", birthday: 2000, messege: false, gift1: false, id: 3},
        {name: "Kate", birthday: 2000, messege: false, gift1: false, id: 4}
    ])

    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('')
    const [maxId, setMaxId] = useState(5)
   


    const deleteItem = (id) => {
        setMyData(myData.filter(item => item.id !==id))

    }

    const addItem = (name, birthday) => {
        console.log("123")
        const newItem = {
            name, 
            birthday,
            messege: false,
            gift: false,
            id: maxId +1
        }
        setMyData([...myData, newItem])
        setMaxId(newItem.id)
       
    }

    const onToggleProp = (id, prop) => {
        console.log("id, prop, myData проверка")
        console.log({id, prop, myData})
    
        setMyData(

            myData.map(item => item.id === id
                ? {...item, [prop]: !item[prop]}
                : item
                )

                
            )
            console.log("[prop]")
            console.log([prop])
            console.log(myData.messege , myData.gift1)
    }

    const searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) >-1;
        })
    }

    const onUpdateSearch = (term) =>{
        setTerm(term)
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'gift1':                                           ///
                return items.filter(item => item.gift1);
            case 'congratulate':
                return items.filter(item => item.messege);  
            default:
                return items
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }



    const birthdayPersons = myData.length;
    const gifted = myData.filter(item => item.gift1).length; // item.gifted
    const congratulated = myData.filter(item =>item.messege).length; // дописала
    const visibleData = filterPost(searchEmp(myData, term), filter);
    

    return (
        <div className="app">
            <AppInfo birthdayPersons={birthdayPersons} gifted={gifted} congratulated={congratulated}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearchApp={onUpdateSearch}/>
                <AppFilter filter = {filter} onFilterSelect ={onFilterSelect}/>
            </div>
            
            <BirthdayList 
                myData={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>

            <BirthdayAddForm onAdd={addItem}/>
        </div>
    );

}

export default App;




