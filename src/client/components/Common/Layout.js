import React from 'react'
const Layout = (props) => {
    return(
        <>
        <header style={{textAlign:"center"}}>Header</header>
        {props.children}
        <footer style={{textAlign:"center"}}>Footer</footer>
        </>
    )
}
export default Layout;