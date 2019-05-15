import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { Row, Col, Layout } from "antd";
import { withRouter } from "next/router";

class PatientDetail extends Component {
  render() {
    return (
      <App {...this.props}>
        <div className="detail-patient-pages">
          <Head>
            <title>detail patient page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                Detail patient page: {this.props.router.query.id}
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

export default withRouter(PatientDetail);
