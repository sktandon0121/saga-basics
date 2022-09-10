
import './App.css';
import { useDispatch } from 'react-redux';
import Count from './component/Count'
import Books from './component/Books'
import { increaseCount, decrementCount } from './redux_basics/actions';
import { AddBook, RemoveBook } from './redux_basics/booksAction';
import { getUser } from './redux_basics/userAction';


const data = { count: 1 }
const book = {
  "isbn": "9781593279509",
  "title": "Eloquent JavaScript, Third Edition",
  "subtitle": "A Modern Introduction to Programming",
  "author": "Marijn Haverbeke",
  "published": "2018-12-04T00:00:00.000Z",
  "publisher": "No Starch Press",
  "pages": 472,
}

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Count />
      <button onClick={() => dispatch(increaseCount(data))} >Increment Count</button>
      <button onClick={() => dispatch(decrementCount(data))} >Decrement Count</button>

      <Books />
      <button onClick={() => dispatch(AddBook(book))} >Add a book</button>
      <button onClick={() => dispatch(RemoveBook(book))} >Remove a book</button>

      <button onClick={() => dispatch(getUser())} >Get User</button>

    </div>
  );
}

export default App;
