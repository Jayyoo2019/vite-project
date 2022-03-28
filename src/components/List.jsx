import React, { useState } from 'react'

export default function List() {
    const [list, setList] = useState(['Programming']);

    const [newTask, setNewTask] = useState('')

    const onChangeInput = (e) => {
        setNewTask(e.target.value);
        console.log("what" + newTask)
        console.log(newTask)
    }

    const add = () => {
        setList([...list, newTask])
        setNewTask('')
    }

    const delete2 = (id) => {
        console.log("delete누름" + delete2)
        console.log("id는무엇?"+item.id)
        setList(list.filter((newTask) => newTask.id !== id))
        //setNewTask('')

    }



    return (
        <div>
            <p>
                to do list: {list.length}
            </p>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={onChangeInput}
                />여기야
                <input type="button" value="add" onClick={add} />
            </div>
            <div>
                <ul>
                    {
                        list.map(item =>
                            <li key={item.id}>
                                {item.id}여기가{item}
                                <input type="button" value="delete" onClick={() => delete2(item.id)} />
                            </li>

                        )

                    }
                </ul>
            </div>
        </div>
    )
}