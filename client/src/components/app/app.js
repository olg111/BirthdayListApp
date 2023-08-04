import { useCallback, useState, useMemo } from "react";
import AppInfo from "../app-info/app-info";
import {addItemRequest, deleteItemRequest, onTogglePropRequest} from "../../lib/requests";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import BirthdayList from "../birthday-list/birthday-list";
import BirthdayAddForm from "../birthday-add-form/birthday-add-form";
import "./app.css";

function App(props) {
  console.log(props);

  const [myData, setMyData] = useState(props.data);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("");

  const [selectorMonth, setSelectorMonth] = useState(null);

  const onSelectorMonth = useCallback((firstEl) => {
    setSelectorMonth(firstEl);
  }, []);


  const deleteItem = useCallback(
    (id) => {
      deleteItemRequest(id)
        .then(() => setMyData(myData.filter((item) => item.id !== id)))
        .catch(function (error) {
          console.log("error", error);
        });
    },
    [myData]
  );

  const addItem = useCallback( (name, date, month) => {
    const newItem = {
      name,
      date,
      month,
      message: false,
      gift1: false,
      id: myData.length + 1,
    };

    addItemRequest(newItem)
      .then((data) => {
        setMyData([...myData, data]);
        setFilter("all");
      });
  }, [myData]);

  const onToggleProp = (id, prop ) => {
    const affectedItem = myData.find((item) => item.id === id);
    const updatedItem = { ...affectedItem, [prop]: !affectedItem[prop] };


    onTogglePropRequest(id, updatedItem)
      .then((res) => {
        setMyData(myData.map((item) => (item.id === id ? res : item)));
      });
  };

  const searchEmp = useCallback((items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  }, []);

  const onUpdateSearch = useCallback((term) => {
    setTerm(term);
  }, []);

  const filterPost = useCallback((items, filter) => {
    const partOfMonth = filter.split(":");
    const filterType = partOfMonth[0];

    switch (filterType) {
      case "gift1":
        return items.filter((item) => item.gift1);
      case "congratulate":
        return items.filter((item) => item.message);
      case "month":
        return items.filter((item) => item.month === partOfMonth[1]);
      default:
        return items;
    }
  }, []);

  const onFilterSelect = useCallback((filter) => {
    console.log(filter);
    setFilter(filter);
    if (filter !== "month") {
      setSelectorMonth(null);
    }
  }, []);

  const birthdayPersons = useMemo(() => {
    return myData.length;
  }, [myData]);

  const gifted = useMemo(() => {
    return myData.filter((item) => item.gift1).length;
  }, [myData]);

  const congratulated = useMemo(() => {
    return myData.filter((item) => item.message).length;
  }, [myData]);

  const visibleData = useMemo(() => {
    return filterPost(searchEmp(myData, term), filter);
  }, [filter, filterPost, myData, searchEmp, term]);

  return (
    <div className="app">
      <AppInfo
        birthdayPersons={birthdayPersons}
        gifted={gifted}
        congratulated={congratulated}
      />

      <div className="search-panel">
        <SearchPanel onUpdateSearchApp={onUpdateSearch} />
        <AppFilter
          filter={filter}
          onFilterSelect={onFilterSelect}
          onSelectorMonth={onSelectorMonth}
          selectorMonth={selectorMonth}
        />
      </div>

      <BirthdayList
        myData={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />

      <BirthdayAddForm onAdd={addItem} />
    </div>
  );
}

export default App;
