import React, { Component, PropTypes } from 'react';

import Setlist from './Setlist.js';

import { POLLARD_ACTION } from '../constants/ActionTypes';

export default class SetlistPage extends Component {
  constructor() {
		super();
  }

  render() {
    return (
      <div>
				<h1>Pollard Setlist Page</h1>
				<Setlist />
			</div>
    );
  }
}
