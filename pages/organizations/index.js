import React, { Component } from "react";
import Head from "next/head";
import queryString from "qs";
import App from "components/Admin";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { Row, Col, Layout, Table } from "antd";
import { createStructuredSelector } from "reselect";
import { onSearchRequest } from "actions/organization";
import * as OrganizationSelector from "selectors/organization";

class Organizations extends Component {
  columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id"
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
      render: (item, record) => {
        const addressLine = record.address || [];
        return addressLine.map((item, index) => (
          <span key={index}>
            {item.text}
            {","}
          </span>
        ));
      }
    },
    {
      title: "Active",
      key: "active",
      dataIndex: "active",
      render: item => <span>{item ? "Active" : "Not Active"}</span>
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
        <div className="organizations-pages">
          <Head>
            <title>Organizations page</title>
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

Organizations.propTypes = {
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
  list: OrganizationSelector.getOrganizationList(),
  total: OrganizationSelector.getCount(),
  isLoaded: OrganizationSelector.getLoaded(),
  pageSize: OrganizationSelector.getPageSize(),
  totalPage: OrganizationSelector.getTotalPage(),
  currentPage: OrganizationSelector.getCurrentPage()
});

const mapDispatchToProps = dispatch => ({
  onLoad: params => dispatch(onSearchRequest(params))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Organizations)
);
