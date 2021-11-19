import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions'

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>
          Sign In
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Routes>
          <Route path="/post" element={<CommentBox />} />
          <Route path="/" element={<CommentList />} />
        </Routes>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
