import React, { Component } from 'react';
import classNames from 'classnames';

import { POLLARD_ACTION } from '../constants/ActionTypes';


export default class SongInput extends Component {
	handleChange(event) {
		console.log('hit input change');
	}

  render() {
		let gridClasses = classNames(
			"col-xs-10",
			"col-xs-offset-1",
			"col-md-6",
			"col-md-offset-0"
		);
		let labelId = "label-" + this.props.label;

    return (
			<div className={ gridClasses }>
				<div className="input-group">
					<span
						className="input-group-addon"
						id={ labelId }>{ this.props.label }</span>
						<input
							type="text"
							className="form-control"
							aria-describedby={ labelId }
							value={ this.props.val }
							onChange={ (e) => this.handleChange(e) }
							/>
				</div>
			</div>
    );
  }
}
