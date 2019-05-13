import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Head from 'next/head'

class Login extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.hasUser && !this.props.hasUser) {
      this.props.router.push('/admin');
    }
  }

  render() {
    return (
      <div className="login-pages">
        <Head>
         <title>Login page</title>
        </Head>
      </div>
    );
  }
}

Login.propTypes = {
  router: PropTypes.object,
  hasUser: PropTypes.bool,
  message: PropTypes.string,
};

export const mapStateToProps = state => ({
  message: state.getIn(['currentUser', 'message']),
  hasUser: !!state.getIn(['currentUser', 'token']),
});

export default connect(mapStateToProps)(withRouter(Login));
