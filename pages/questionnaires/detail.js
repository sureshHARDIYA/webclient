import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { connect } from "react-redux";
import { isEmpty } from "helpers/utils";
import { withRouter } from "next/router";
import { Row, Col, Layout, Typography } from "antd";
import { createStructuredSelector } from "reselect";
import { onSingleRequest } from "actions/questionnaire";
import { getisLoading, getQuestionnaireDetail } from "selectors/questionnaireSingle";

const { Text } = Typography;

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
                <table style={{ width: "100%" }}>
                  <thead className="ant-table-thread" />
                  <tbody>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>ID:</Text>
                      </th>
                      <td>
                        <Text>{row.id}</Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>ResourceType:</Text>
                      </th>
                      <td>
                        <Text>{row.resourceType}</Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>URL:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.url}
                        </Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>purpose:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.purpose}
                        </Text>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
