import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Form, Button, Spin, Row, Col, Card } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/input';
import renderSelect from 'components/Form/Fields/select';

const colPropsLeft = {
  lg: 18,
  md: 24,
};
const colPropsRight = {
  lg: 6,
  md: 24,
};

class PostForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting, message } = this.props;

    return (
      <Form
        onSubmit={handleSubmit}
        className="post-form-components form-shared"
      >
        <Spin
          spinning={submitting}
          tip="Submitting..."
        >
          <Row gutter={32}>
            <Col {...colPropsLeft}>
              <Card title="Post Title">
                <Field
                  hasFeedback
                  name="title"
                  component={renderInput}
                  placeholder="title"
                  disabled={submitting}
                />
              </Card>
              <Card title="Post Content">
                <Field
                  hasFeedback
                  name="content"
                  type="textarea"
                  placeholder="Content"
                  component={renderInput}
                  disabled={submitting}
                />
              </Card>
              <Card title="Post Excerpt">
                <Field
                  hasFeedback
                  name="excerpt"
                  type="textarea"
                  placeholder="Excerpt"
                  component={renderInput}
                  disabled={submitting}
                />
              </Card>
            </Col>
            <Col {...colPropsRight}>
              <Card
                title="Action"
              >
                <Field
                  hasFeedback
                  name="status"
                  label="Status"
                  disabled={submitting}
                  options={[{ key: 'active', label: 'active' },  { key: 'inactive', label: 'inactive' }]}
                  component={renderSelect}
                />

                <Form.Item
                  className="center"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                    disabled={pristine || submitting}
                  >
                    Save
                  </Button>
                </Form.Item>
              </Card>
              <Card
                title="Category"
              >
                <Form.Item
                  className="center"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                    disabled={pristine || submitting}
                  >
                    Save
                  </Button>
                </Form.Item>
              </Card>
            </Col>
          </Row>
          {!!message && <p className="caption-invalid">{message}</p>}
        </Spin>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Email can\'t be blank';
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = 'Email is invalid';
  }

  if (!values.get('password')) {
    errors.password = 'Password can\'t be blank';
  }

  return errors;
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  message: PropTypes.string,
};

export default reduxForm({
  form: 'signin',
  validate,
})(PostForm);
