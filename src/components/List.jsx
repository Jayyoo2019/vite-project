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
        setList(list.filter((newTask) => newTask[0] !== ''))
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
                />
                <input type="button" value="add" onClick={add} />
            </div>
            <div>
                <ul>
                    {
                        list.map(item =>
                            <li key={item.id}>
                                {item}
                                <input type="button" value="delete" onClick={() => delete2(item.id)} />
                            </li>

                        )

                    }
                </ul>
            </div>
            <hr></hr>
        </div>
    )
}