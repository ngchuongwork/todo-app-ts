import React from 'react';
import {Status} from './Status';
import { useState, useRef, useEffect} from "react";


function TodoList(){
    const [inputValue, setInputValue] = useState('');
    
    function handleChange(e){
        console.log(e.target)
    }
    function handleSubmit(e){
    }

    return(
        <div style={{ margin: "0 auto", width: "800px", display: "flex" }}>
        <div style={{ margin: "0 auto", width: "300px" }}>
          <center>
            <h3>TodoList</h3>
        </center>
        <form style={{ margin: "0 auto", width: "220px", display: "flex" }}>
            <input
              style={{ width: "85%" }}
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
              <button style={{ width: "15%" }} onClick={handleSubmit}>
              Add
            </button>
            </form>
        </div>
        </div>
    );
}


export default TodoList;