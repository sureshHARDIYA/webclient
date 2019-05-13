import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import Head from 'next/head'
import App from 'components/Admin';

class Questionnaires extends Component {
  render() {
    return (
      <App {...this.props}>
        <div className="questionnaires-pages">
          <Head>
           <title>Questionnaires page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <h1>Questionnaires page</h1>
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

export default Questionnaires;
