import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Layout, Table } from "antd";
import { connect } from "react-redux";
import queryString from "qs";
import { withRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import App from "components/Admin";
import { createStructuredSelector } from "reselect";
import * as QuestionnaireSelector from "selectors/questionnaire";
import { onSearchRequest } from "actions/questionnaire";

class Questionnaires extends Component {
  columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
      render: (item) => <Link as={`/questionnaires/${item}`} href={`/patients/detail?id=${item}`}><a>{item}</a></Link>
    },
    {
      title: "Name",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date"
    },
    {
      title: "Purpose",
      key: "purpose",
      dataIndex: "purpose",
    }
  ];

  componentDidMount() {
    this.props.onLoad(this.props.router.query);
  }

  onChange = page => {
    const { query = {}, pathname } = this.props.router;
    query.page = page;
    this.props.onLoad(query);
    this.props.router.replace(`${pathname}?${queryString.stringify(query)}`);
  };

  render() {
    const {
      list,
      isLoaded,
      total,
      pageSize,
      currentPage: current
    } = this.props;

    return (
      <App {...this.props}>
        <div className="patients-pages">
          <Head>
            <title>Questionnaires page</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <Table
                  rowKey="id"
                  dataSource={list}
                  loading={isLoaded}
                  columns={this.columns}
                  pagination={{
                    total,
                    current,
                    pageSize,
                    onChange: this.onChange
                  }}
                />
              </Col>
            </Row>
          </Layout.Content>
        </div>
      </App>
    );
  }
}

Questionnaires.propTypes = {
  onLoad: PropTypes.func,
  list: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  router: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
};

const mapStateToProps = createStructuredSelector({
  list: QuestionnaireSelector.getQuestionnaireList(),
  total: QuestionnaireSelector.getCount(),
  isLoaded: QuestionnaireSelector.getLoaded(),
  pageSize: QuestionnaireSelector.getPageSize(),
  totalPage: QuestionnaireSelector.getTotalPage(),
  currentPage: QuestionnaireSelector.getCurrentPage()
});

const mapDispatchToProps = dispatch => ({
  onLoad: params => dispatch(onSearchRequest(params))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Questionnaires)
);
