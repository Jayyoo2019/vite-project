import React from 'react'
import dummy from '../db/data.json'
function Daylist() {
    console.log(dummy);
  return (
    <div>Daylist 
        <ui>
            {dummy.days.map(a=>(
                <li>
                    {a.day}
                </li>    
            ))}
        </ui>
    </div>
  )
}

export default Daylist