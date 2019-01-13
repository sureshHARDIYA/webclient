import React, { Component } from 'react';
import Head from 'next/head';
import { Table, Button } from 'antd';
import { idRequired } from 'helpers/isAuth';
import App from 'components/Admin';

class Admin extends Component {
  dataSource = [{
    key: '1',
    title: 'ReactJS',
    description: 'Something around reactjs',
    createdAt: '20 / 12 / 2018',
  }, {
    key: '2',
    title: 'Redux',
    description: 'Something around Redux',
    createdAt: '20 / 12 / 2018',
  }];

  columns = [{
    title: 'Title',
    key: 'title',
    dataIndex: 'title',
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  }];

  render() {
    return (
      <App {...this.props}>
        <Head>
          <title>All Categories of post</title>
        </Head>
        <div className="box-header flexbox align-items-center">
          <h1 className="title-page">
            Post Category
          </h1>
          <Button>
            Add New
          </Button>
        </div>
        <Table dataSource={this.dataSource} columns={this.columns} />
      </App>
    );
  }
}

export default idRequired(Admin);
