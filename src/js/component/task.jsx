import React, { useState } from "react";

const Task = (props) => {
    const [onHover, setOnHover] = useState(false);

    const handleMouseEnter = () => {
        setOnHover(true);
    };

    const handleMouseLeave = () => {
        setOnHover(false);
    };

    const removeThis = () => {
        const updatedTasks = props.tasks.filter(task => task.id !== props.id);
        props.setTasks(updatedTasks);
    };

	return (
        <div className="py-2 px-5 border-bottom d-flex justify-content-between" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>{props.task}</div>
            {onHover && <div onClick={removeThis}><i className="text-danger fa-solid fa-xmark"></i></div>}
        </div>
	);
};

export default Task;