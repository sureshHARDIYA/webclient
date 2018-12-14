import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './style.scss';

class AppLayout extends Component {
  render() {
    return (
      <Layout
        className="components-layout-demo-custom-trigger"
      >
        hallo
      </Layout>
    );
  }
}

// AppLayout.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

export default AppLayout;
