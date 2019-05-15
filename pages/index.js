import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import Head from "next/head";
import App from "components/Admin";

class Page extends Component {
  render() {
    return (
      <App {...this.props}>
        <Head>
          <title>INTROMAT-Frontend Page</title>
        </Head>
        <Layout.Content>
          <Row>
            <Col span={24}>
              <h1>Welcome INTROMAT Mental Health Intervetion Page</h1>
            </Col>
          </Row>
        </Layout.Content>
      </App>
    );
  }
}

export default Page;
