import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Layout, Table } from "antd";
import { connect } from "react-redux";
import queryString from "qs";
import { withRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import App from "components/Admin";
import { onSearchRequest } from "actions/patient";
import { createStructuredSelector } from "reselect";
import * as PatientSelector from "selectors/patient";

class Patients extends Component {
  columns = [
    {
      title: "Id",
      key: "id",
      dataIndex: "id",
      render: (item) => <Link as={`/patients/${item}`} href={`/patients/detail?id=${item}`}><a>{item}</a></Link>
    },
    {
      title: "Name",
      key: "title",
      dataIndex: "title",
      render: (item, record) => {
        const name = (record.name || [])[0] || {};
        return (
          <span>
            {[(name.given || [])[0] || "", name.family || ""].join(" ").trim()}
          </span>
        );
      }
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender"
    },
    {
      title: "Status",
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
        <div className="patients-pages">
          <Head>
            <title>Patients page</title>
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

Patients.propTypes = {
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
  total: PatientSelector.getCount(),
  isLoaded: PatientSelector.getLoaded(),
  list: PatientSelector.getPatientList(),
  pageSize: PatientSelector.getPageSize(),
  totalPage: PatientSelector.getTotalPage(),
  currentPage: PatientSelector.getCurrentPage()
});

const mapDispatchToProps = dispatch => ({
  onLoad: params => dispatch(onSearchRequest(params))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Patients)
);
