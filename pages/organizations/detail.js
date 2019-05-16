import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import {
  getisLoading,
  getOrganizationDetail
} from "selectors/organizationSingle";
import { connect } from "react-redux";
import { isEmpty } from "helpers/utils";
import { withRouter } from "next/router";
import { Row, Col, Layout, Typography } from "antd";
import { createStructuredSelector } from "reselect";
import { onSingleRequest } from "actions/organization";

const { Text } = Typography;

class OrganizationDetail extends Component {
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
        <div className="detail-organization-pages">
          <Head>
            <title>Organization - {row.name}</title>
          </Head>
          <Layout.Content>
            <Row>
              <Col span={24}>
                <table style={{ width: "100%" }}>
                  <thead className="ant-table-thread" />
                  <tbody>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Name:</Text>
                      </th>
                      <td>
                        <Text>{row.name}</Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Active:</Text>
                      </th>
                      <td>
                        <Text>{row.active ? "Active" : "Not Active"}</Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Address:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.address.map((item, index) => (
                            <span key={index}>
                              {item.text}
                              {","}
                            </span>
                          ))}
                        </Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Telecom:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.telecom.map((item, index) => (
                            <span key={index}>
                              {item.system}
                              {": "}
                              {item.value}
                              {","}
                            </span>
                          ))}
                        </Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Contact:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.contact.map((item, index) => (
                            <span key={index}>
                              {item.address.text}
                              {", Name:"}
                              {item.name.text}
                              {","}
                            </span>
                          ))}
                        </Text>
                      </td>
                    </tr>
                    <tr style={{ height: "50px" }}>
                      <th>
                        <Text strong>Alias:</Text>
                      </th>
                      <td>
                        <Text>
                          {row.alias.map((item, index) => (
                            <span key={index}>
                              {item}
                              {","}
                            </span>
                          ))}
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
  row: getOrganizationDetail(),
  isLoading: getisLoading()
});

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(onSingleRequest({ id }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrganizationDetail)
);
