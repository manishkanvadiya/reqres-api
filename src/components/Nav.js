import React from 'react';

const Nav = (props) =>{
    return(
        <header>
            <h2>LOGO</h2>
            <ul>
            {props.links}
            </ul>
        </header>
    )
}
export default Nav