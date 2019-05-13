import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import Head from 'next/head'
import App from 'components/Admin';

class Organizations extends Component {
  render() {
    return (
      <App {...this.props}>
        <div className="organizations-pages">
          <Head>
           <title>Organizations page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <h1>Organizations page</h1>
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

export default Organizations;
