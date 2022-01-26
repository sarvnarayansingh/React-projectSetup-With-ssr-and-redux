import React from 'react';
import { Link } from 'react-router-dom';

const renderUrl = process.env.RenderUrl;
const AboutUs = () => {
    return <div>
        <p>AboutUsPage</p>
        <p><Link to={renderUrl}>homepage</Link></p>
        <p><Link to='/contact'>ContactUsPage</Link></p>
        
    </div>;
  };
  
  export default { component: AboutUs };