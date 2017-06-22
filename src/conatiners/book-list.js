import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
			<li
			 key={book.title}
			 onClick={() => this.props.selectBook(book)}
			 className="list-group-item">
			 {book.title}
			</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	//whatever is returned will show up as props
	// inside of BookList
	return {
		books: state.books
	};
}
//anything returned from this function will end up as
// props on the bookList Container

function mapDispactToProps(dispatch) {
	//Whenever selectBook is called, the result should be
	// pased to all our producers
	//Action creator
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a compone to a container
//it needs to know about this new dispatch container selectBook
//make it availabe as a prop
export default connect(mapStateToProps, mapDispactToProps)(BookList);
