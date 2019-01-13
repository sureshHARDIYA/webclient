import React, { Component } from 'react';
import Head from 'next/head';
import { Table, Button } from 'antd';
import { idRequired } from 'helpers/isAuth';
import App from 'components/Admin';

class PostAdmin extends Component {
  dataSource = [{
    key: '1',
    title: 'ReactJS',
    status: 'Active',
    description: 'Something around reactjs',
    createdAt: '20 / 12 / 2018',
  }, {
    key: '2',
    title: 'Redux',
    status: 'Inactive',
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
  },{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  }];

  render() {
    return (
      <App {...this.props}>
        <Head>
          <title>All posts</title>
        </Head>
        <div className="box-header flexbox align-items-center">
          <h1 className="title-page">
            All posts
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

export default idRequired(PostAdmin);
