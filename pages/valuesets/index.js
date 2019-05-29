import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import queryString from "qs";
import App from "components/Admin";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { Row, Col, Layout, Table } from "antd";
import { createStructuredSelector } from "reselect";
import * as ValueSetSelector from "selectors/valueset";
import { onSearchRequest } from "actions/valueset";

class ValueSet extends Component {
  columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
      render: item => (
        <Link as={`/valuesets/${item}`} href={`/valuesets/detail?id=${item}`}>
          <a>{item}</a>
        </Link>
      )
    },
    {
      title: "Name",
      key: "title",
      dataIndex: "title"
    },
    {
      title: "Version",
      key: "version",
      dataIndex: "version"
    },
    {
      title: "Publisher",
      key: "publisher",
      dataIndex: "publisher"
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
            <title>ValueSet page</title>
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

ValueSet.propTypes = {
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
  list: ValueSetSelector.getValueSetList(),
  total: ValueSetSelector.getCount(),
  isLoaded: ValueSetSelector.getLoaded(),
  pageSize: ValueSetSelector.getPageSize(),
  totalPage: ValueSetSelector.getTotalPage(),
  currentPage: ValueSetSelector.getCurrentPage()
});

const mapDispatchToProps = dispatch => ({
  onLoad: params => dispatch(onSearchRequest(params))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ValueSet)
);
