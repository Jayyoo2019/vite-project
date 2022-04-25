import React, {useState} from 'react'
import ReactDom from 'react-dom';
import '../ttt.css'
import Game from './tictactoe';

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
            
            const d = new Date('December 17, 1995 03:24:00');
            const s = d.toString();
            console.log(d)
            console.log(s)
            console.log(d==s);

            const string1 = "hello"
            const string2 = String(string1)
            const string3 = new String("hello")
            const string4 = new String("hello")
            console.log(string2)
            console.log(string2 == string3)
            console.log(string3 == string4)
            console.log(string4)
            console.log("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Equality")
            
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
            <Game/>
            <p>
            https://victorydntmd.tistory.com/53
            </p>
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