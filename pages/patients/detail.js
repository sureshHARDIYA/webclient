import React, { Component } from "react";
import Head from "next/head";
import App from "components/Admin";
import { connect } from "react-redux";
import { Row, Col, Layout, Typography } from "antd";
import { isEmpty } from "helpers/utils";
import { withRouter } from "next/router";
import { createStructuredSelector } from "reselect";
import { onSingleRequest } from "actions/patient";
import { getisLoading, getPatientDetail } from "selectors/patientSingle";

const { Text } = Typography;

class PatientDetail extends Component {
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
        <div className="detail-patient-pages">
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
                        <Text strong>Gender:</Text>
                      </th>
                      <td>
                        <Text>{row.gender}</Text>
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
  row: getPatientDetail(),
  isLoading: getisLoading()
});

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(onSingleRequest({ id }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PatientDetail)
);
