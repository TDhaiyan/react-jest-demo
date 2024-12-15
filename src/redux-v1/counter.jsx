import React from 'react'
const Counter = ({ count, countAdd, countSub }) => {
    return(
        <div style={{
            textAlign:'center'
        }}>
            <button onClick={() =>countSub}>减一</button>
            <span style={{
                display:'inline-block',
                width:'50px',
                textAlign:'center'
            }}>
                {count}
            </span>
            <button onClick={() =>countAdd}>加一</button>
        </div>
    )

}
export default Counter