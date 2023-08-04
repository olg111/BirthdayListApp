import { useCallback, useState } from "react";

import "./birthday-add-form.css";
import Selector from "../selector/selector";

function BirthdayAddForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  const onValueChange = useCallback( (e, setState) => {

    setState(e.target.value);
  }, [])


  const onDateChange = useCallback( (e, setDate) => {
    const min = 1;
    const max = 31;
    const value = Math.max(min, Math.min(max, Number(e.target.value)));    
    setDate(value);
  }, [])


  const onMonthChange = useCallback((monthValue) => {
    setMonth(monthValue.value);
  }, [])


  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (name.length < 3 || date > 31 || !month) return;

    props.onAdd(name, date, month);

    setName("");
    setDate("");
    setMonth("");
  }, [date, month, name, props])




  return (
    <div className="app-add-form">
      <h3>Add new birthday</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          data-testid="Person-Input"
          className="form-control new-post-label"
          placeholder="Person"
          name="name"
          value={name}
          onChange={(e) => {
            onValueChange(e, setName);
          }}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Birthday date"
          data-testid="Birthday-Input"
          name="date"
          value={date}
          onChange={(e) => {
            onDateChange(e, setDate);
          }}
        />

        <Selector
          className="form-select form-select-sm"
          name="month"
          value={month}
          onChange={onMonthChange}
        />

        <button data-testid="Add-Btn" type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
}

export default BirthdayAddForm;
