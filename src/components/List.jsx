import React, {useState} from 'react'

export default function List() {
    const [list, setList] = useState(['Programming']);

    const [newTask, setNewTask] = useState('')

    const onChangeInput = (e) => {
        setNewTask(e.target.value);
        console.log("what"+newTask)
    }

    const add = () => {
        setList([...list, newTask])
        setNewTask('')
    }

    const delete2 = () =>{
        setList([...list, ''])
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
                    <input type="button" value="delete" onClick={delete2}/>
                            </li>

                        )
                        
                    }
                </ul>
            </div>
        </div>
    )
}