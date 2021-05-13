import React from 'react'

export const Footer = () => {
    let footerStyle ={
        width: "100%",
        position: 'relative',
        bottom:'0px',
        marginTop:'10rem'
    }

    return (
        <div className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>
            Copyright &copy; MyTodoList.com
            </p>
        </div>
    )
}
