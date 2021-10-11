import React,{useEffect} from 'react'
import { renderRoutes } from 'react-router-config';

function App(props) {

    useEffect(() => {
        props.globalAction()
    },[])
    return (
        <div>
            <h1>hello</h1>
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default {component:App}
  
