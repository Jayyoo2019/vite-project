import { useEffect, useState } from 'react'
import React from "react";

export default function List(){
    const [count, setCount] = useState(0)

    const [list, setList] = useState(['Programming']);

    const [newlist, setNewlist] = useState('')


    const onChangeInput = (e)=>{
        setNewlist(e.target.value);
    }

    const add2 =()=>{
        setList([...list, newlist])
    }
    return(
        <div>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            to do list: {count}
          </button>
        </p>
            <div>
                <input 
                    type="text"
                    onChange={onChangeInput}
                />
                <input type="button" value="add" onClick={add2}/>
            </div>
            <div>
                <li>
                    {newlist}
                </li>
            </div>
        </div>
    )
}