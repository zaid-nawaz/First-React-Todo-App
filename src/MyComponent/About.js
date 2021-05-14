import React from 'react'
export const About = (props) => {
    
    console.log(props.vals[0])
    console.log(typeof(props.texts[0]))
    let y = JSON.stringify(props.texts[0])
    let x = JSON.stringify(props.vals[0])
    console.log(x)
    return (
        <div>
            {props.texts[0] ? 'hello ' : 'not hello '} 
             this is the about section!
    <h1>{x}</h1>
    <h2>{y}</h2>
            <button className={props.texts[0] ? 'btn btn-success my-3 mx-3' : 'btn btn-danger my-3 mx-3'} onClick={()=>{
                // props.texts[1][!props.texts[0]]
                props.vals[1](props.vals[0]+1)
                props.texts[1](!props.texts[0])
             } }>change to {y=='true' ? 'false' : 'true'}</button>
            
        </div>
        
    )

}

