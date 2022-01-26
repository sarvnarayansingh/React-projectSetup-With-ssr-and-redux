import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../client/components/Common/Layout';

class App extends Component {
  render() {
    return (
    <Layout>
     {renderRoutes(this.props.route.routes)}
    </Layout>
    );
  }
}

export default {
  component: App
};