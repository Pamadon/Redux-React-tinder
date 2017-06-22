import React, { Component } from 'react';

import BookList from '../conatiners/book-list';
import BookDetail from '../conatiners/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
				<BookList />
				<BookDetail />
			</div>
    );
  }
}
