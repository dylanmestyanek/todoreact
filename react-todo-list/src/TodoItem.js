import React, { useState } from "react";

const TodoItem = ({
    setItems,
    items,
    item
}) => {
    const [checkedItem, setCheckedItem] = useState(false);

    const removeTask = (item) => {
        let filteredArr = items.filter(task => task.id !== item.id && item)
        setItems(filteredArr);
        setCheckedItem(!checkedItem);
    };

    const toggleCompleted = () => {
        setCheckedItem(!checkedItem);
        console.log()
    }
    return (
        <div className="task-container">
            <li style={checkedItem ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
                <input type="checkbox" checked={checkedItem} onChange={toggleCompleted} />
            {item.value}</li>
            {checkedItem === true && <button onClick={() => removeTask(item)}><i className="fas fa-trash-alt"></i></button>}
        </div>
    )
};

export default TodoItem;