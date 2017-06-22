export function selectBook(book) {
	// SelectBook is an action creator it needs to return and action
	// an Object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
