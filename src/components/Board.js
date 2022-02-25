import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';
import PropTypes from 'prop-types';

class Board extends Component {
	constructor() {
		super();
	}
	
	render() {
		return (
			<div>
				<div className="div-board">
					<div className="row">
						<Note title="My first book" body="Genesis" />
						<Note title="My first vacation" body="Alabama" />
						<Note title="My first movie" body="Big Chungus" />
					</div>
				</div>
				<div>
					<button className="btn btn-success add-button">Add</button>
				</div>
			</div>
		);
	}
}

Note.defaultProps = {
  title: "A cool title",
  body: "A cool body",
};
Note.propTypes = {
  title: PropTypes.string
};

export default Board;
