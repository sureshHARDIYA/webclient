import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { connect } from "react-redux";
import { Row, Col, Layout } from "antd";
import { isEmpty } from "helpers/utils";
import { withRouter } from "next/router";
import JSONPretty from "react-json-pretty";
import { createStructuredSelector } from "reselect";
import { onSingleRequest } from "actions/questionnaire";
import {
  getisLoading,
  getQuestionnaireDetail
} from "selectors/questionnaireSingle";

class QuestionnaireDetail extends Component {
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
        <div className="detail-questionnaire-pages">
          <Head>
            <title>detail patient page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <JSONPretty id="json-pretty" data={row} />
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  row: getQuestionnaireDetail(),
  isLoading: getisLoading()
});

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(onSingleRequest({ id }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuestionnaireDetail)
);
