import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Layout, Table } from 'antd';
import { connect } from 'react-redux';
import Head from 'next/head'
import App from 'components/Admin';
import { onSearchRequest } from 'actions/patient';
import { createStructuredSelector } from 'reselect';
import * as PatientSelector from 'selectors/patient';

class Patients extends Component {
  columns = [{
    title: 'Id',
    key: 'id',
    dataIndex: 'id',
  }, {
    title: 'Name',
    key: 'title',
    dataIndex: 'title',
    render: (item, record) => {
      const name = (record.name || [])[0] || {};
      return <span>{[(name.given || [])[0] || '', name.family || ''].join(' ').trim()}</span>
    }
  }, {
    title: 'Gender',
    key: 'gender',
    dataIndex: 'gender',
  }, {
    title: 'Status',
    key: 'active',
    dataIndex: 'active',
    render: (item) => <span>{item ? 'Actived' : 'Deactived'}</span>
  }]

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
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
                  columns={this.columns}
                  dataSource={this.props.patients}
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
  patients: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  patients: PatientSelector.getPatientList(),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (params) => dispatch(onSearchRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Patients);