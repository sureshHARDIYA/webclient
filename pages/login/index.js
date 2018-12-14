import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginFrom from 'components/Form/SignIn';
import { onSubmitRequest } from 'actions/login';
import { withRouter } from 'next/router'
import './style.scss';

class Login extends Component {
  render() {
    return (
      <div className="login-pages">
        <LoginFrom
          message={this.props.message}
          onSubmit={(e) => {
            this.props
              .onSubmit(e.toJS())
              .then(() => this.props.router.push('/admin'));
          }}
        />
      </div>
    );
  }
}

Login.propTypes = {
  router: PropTypes.object,
  message: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  message: state.getIn(['currentUser', 'message']),
});

export const maptDispatchToProps = dispatch => ({
  onSubmit: (params) => dispatch(onSubmitRequest(params)),
});

export default connect(mapStateToProps, maptDispatchToProps)(withRouter(Login));
