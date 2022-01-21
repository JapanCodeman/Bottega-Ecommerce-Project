import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pagetitle';

class Review extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  
  render () {
    return (
      <div>
        <div className='review'>
          <PageTitle className='review__page-title' title='Order Review'/>
        </div>
      </div>
    );
  }
}

Review = connect(null, actions)(Review);

export default Review;