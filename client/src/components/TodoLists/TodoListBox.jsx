import React, { useState } from 'react';
import './TodoLists.css';
import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';

const TodoListBox = ({ id, title, description, deleteTaskId, displayModal }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`todo-list-box ${showDetails ? 'show-details' : ''}`}>
            <div className='todo-list-header'>
                <h5>{title}</h5>
                <button className="eye-button" onClick={toggleDetails}>
                    {showDetails ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            {
                showDetails && (
                    <>
                        <div className="todo-list-body">
                            <p>{description.split("", 35)}</p>
                        </div>
                        <div className='todo-list-footer'>
                            <button
                                onClick={() => {
                                    displayModal();
                                }}
                            >
                                <FaEdit
                                />
                            </button>
                            <button
                                onClick={() => {
                                    deleteTaskId(id);
                                }}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default TodoListBox;