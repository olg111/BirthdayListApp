import { useMemo } from "react";
import BirthdayListItem from "../birthday-list-item/birthday-list-item";
import "./birthday-list.css";

const BirthdayList = ({ myData, onDelete, onToggleProp }) => {  

  const elements = useMemo( () => {
    return myData.map((item) => {  //useMemo
        const { id, ...itemProps } = item;
        return (
          <BirthdayListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) =>
              onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
            }
          />
        );
      });

  }, [myData, onDelete, onToggleProp])

  return <ul className="app-list list-group">{elements}</ul>;
};

export default BirthdayList;
