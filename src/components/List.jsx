import React, {useState} from 'react'

export default function List() {
    const [list, setList] = useState(['Programming']);

    const [newTask, setNewTask] = useState('')

    const onChangeInput = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask != 0){
            console.log("else")
            setList([...list, newTask])
            setNewTask('')
        }else{
            alert("should not be empty!")
        }
    }

    const deleteTask = (id) => {
        console.log(deleteTask)
        console.log(list.slice(0,id))
        setList([...list.slice(0, id), ...list.slice(id + 1)])
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
                <input type="button" value="add" onClick={addTask}/>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, id) =>
                            <li key={id}>
                                {item}
                                <input type="button" value="delete" onClick={() => deleteTask(id)}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}