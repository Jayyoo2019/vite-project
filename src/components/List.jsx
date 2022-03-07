import React, {useState} from 'react'

export default function List() {
    const [list, setList] = useState(['Programming']);

    const [newTask, setNewTask] = useState('')

    const onChangeInput = (e) => {
        setNewTask(e.target.value);
    }

    const add = () => {
        setList([...list, newTask])
        setNewTask('')
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
                <input type="button" value="add" onClick={add}/>
            </div>
            <div>
                <ul>
                    {
                        list.map(item =>
                            <li>
                                {item}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}