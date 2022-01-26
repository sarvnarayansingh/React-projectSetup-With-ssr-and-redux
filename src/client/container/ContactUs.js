import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const renderUrl = process.env.RenderUrl;
const ContactUs = () => {
    const history = useHistory();
    return <div>
        <p>ContactUsPage</p>
        <p><Link to={renderUrl}>homepage</Link></p>
        <p><Link to='/about'>AboutUsPage</Link></p>
        <p onClick={history.goBack}><Link>BackToPage</Link></p>
        
        
    </div>;
  };
  
  export default { component: ContactUs };