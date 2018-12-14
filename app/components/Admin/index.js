import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Sider from 'components/Admin/Layout/Sider';
import Header from 'components/Admin/Layout/Header';

class AdminLayout extends Component {
  render() {
    if (!(this.props.currentUser || {}).uuid) {
      return null;
    }

    return (
      <Layout
        className="admin-components"
        style={{ minHeight: '100vh' }}
      >
        <Sider />
        <Layout>
          <Header />
          <Layout.Content>
            {this.props.children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Management System © 2018 by Open
          </Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

AdminLayout.propTypes = {
  currentUser: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),
};

export default AdminLayout;
