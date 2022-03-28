import React, {useState} from 'react'

// let name ="Mike";
// function changeName(){
//   name = name === "Mike" ? "Jane" : "Mike";
//   console.log(name)
//   document.getElementById("name").innerText = name;
// }

function Hello(props) {
    function showName() {
        console.log("showname!")
    }

    function showText(e) {
        console.log(e.target.value);
    }

    const [name2, setName2] = useState('Mike')
    function changeName() {
        const newName = name2 === "Mike" ? "Jane" : "Mike";
        setName2(newName)
    }
    return (
        <div>
            <hr></hr>
            <h1
                style={{
                    color: "#f00",
                    borderRight: "12px solid #030",
                    marginBottom: "50px",
                    opacity: 1,
                }}
            >
                State 
            </h1>
            <button onClick={showName}>Show Name</button>
            <button onClick={() => {
                console.log("hello2")
            }}>Show age</button>
            <br/>
            <input type="text" onChange={showText}></input>


            {/* <h2 id="name">{name}</h2>
  <button onClick={changeName}>change</button> */}

            <h2>{name2}</h2>
            <button onClick={changeName}>change</button>
            
            
            <h1
                style={{
                    color: "#f00",
                    borderRight: "12px solid #030",
                    marginBottom: "50px",
                    opacity: 1,
                }}
            >
                Props : Prosperties 
            </h1>
            <h2>{props.age}</h2>



            <hr></hr></div>
           
    ) 
}

export default Hello










