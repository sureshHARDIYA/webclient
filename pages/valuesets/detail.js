import React, { Component } from "react";
import Head from "next/head";
import { Row, Layout } from "antd";
import App from "components/Admin";
import { connect } from "react-redux";
import { isEmpty } from "helpers/utils";
import { withRouter } from "next/router";
import JSONPretty from "react-json-pretty";
import { onSingleRequest } from "actions/valueset";
import { createStructuredSelector } from "reselect";
import { getisLoading, getValueSetDetail } from "selectors/valuesetSingle";

class ValueSetDetail extends Component {
  componentDidMount() {
    if (this.props.onLoad) {
      this.props.onLoad(this.props.router.query.id);
    }
  }

  render() {
    const { row } = this.props;

    if (isEmpty(row)) {
      return <App {...this.props}>No data returned from API.</App>;
    }

    return (
      <App {...this.props}>
        <div className="detail-valueset-pages">
          <Head>
            <title>detail patient page</title>
          </Head>
          <Layout.Content>
            <Row>
              <JSONPretty id="json-pretty" data={row} />
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  row: getValueSetDetail(),
  isLoading: getisLoading()
});

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(onSingleRequest({ id }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ValueSetDetail)
);
