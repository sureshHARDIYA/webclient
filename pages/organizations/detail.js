import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { connect } from "react-redux";
import { Row, Col, Layout } from "antd";
import { withRouter } from "next/router";
import { onSingleRequest } from "actions/organization";

class OrganizationDetail extends Component {
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad(this.props.router.query.id);
    }
  }

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

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(onSingleRequest({ id }))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(OrganizationDetail)
);
