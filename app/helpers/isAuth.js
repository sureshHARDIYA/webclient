import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'next/router'
import * as UserSelector from 'selectors/currentUser';
import { onRefreshSuccess } from 'actions/login';

export const isAuth = (OldComponent) => {
  class newComponent extends Component {
    UNSAFE_componentWillMount() {
      const { asPath } = this.props.router;
      const params = asPath.match(/access_token=(.*)&expires_in/);
      if (params && params[1]) {
        this.props.onRefresh(params[1]);
      }
    }

    render() {
      const { currentUser } = this.props;

      if (currentUser && currentUser.token) {
        return <OldComponent {...this.props} />;
      }

      return (
        <div className="login-screen">
          <a href={`${process.env.OAUTH_URL}/auth?client_id=${process.env.CLIENT_ID}&response_type=id_token+token&scope=openid+email+patient/*.*&nonce=foobar&prompt=login`}>Click login</a>
        </div>
      )
    }
  }

  newComponent.propTypes = {
    router: PropTypes.object,
    currentUser: PropTypes.object,
  };

  newComponent.defaultProps = { currentUser: {} };

  const mapStateToProps = createStructuredSelector({
    currentUser: UserSelector.getCurrentUser(),
  });

  const mapDispatchToProps = (dispatch) => ({
    onRefresh: token => dispatch(onRefreshSuccess(token)),
  });

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(newComponent));
};
