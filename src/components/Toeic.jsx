import React from 'react'
import Daylist from './Daylist'
import Day from './Day'
function Toeic() {
  return (
    <div>
        <div>
            <h1>토익 영단어(고급)</h1>
            <Daylist/>
            <Day/>
            <div>
                <a href="#x" className='link'>단어추가</a>
                <a>Day 추가</a>
            </div>
        </div>
    </div>
  )
}

export default Toeic