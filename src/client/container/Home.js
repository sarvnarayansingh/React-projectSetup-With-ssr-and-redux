import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as globalCreator from '../../Redux/Actions/ActionCreator/GlobalAction'

const HomePage = (props) => {

  useEffect(() => {
    props.globalAction()
  },[])

  console.log("globalData",props.globalData)

    return <div>
      <p>HomePage</p>
      <p><Link to='/contact'>ContactUsPage</Link></p>
      <p><Link to='/about'>AboutUsPage</Link></p>
    </div>;
  };
  
  const mapStateToProps =(state) => {
    return{
      globalData: state.globalData.globalStore
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      globalAction: () => dispatch(globalCreator.globalAction()),
    }
  }
  export default { component: connect(mapStateToProps, mapDispatchToProps)(HomePage) };