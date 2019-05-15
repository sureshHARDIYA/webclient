import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { Row, Col, Layout } from "antd";
import { withRouter } from "next/router";

class OrganizationDetail extends Component {
  render() {
    return (
      <App {...this.props}>
        <div className="detail-organization-pages">
          <Head>
            <title>detail organization page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                Detail organization page: {this.props.router.query.id}
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

export default withRouter(OrganizationDetail);
