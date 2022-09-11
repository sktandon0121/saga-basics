
import './App.css';
import { useDispatch } from 'react-redux';
import Count from './component/Count'
import Books from './component/Books'
import { increaseCount, decrementCount } from './redux_basics/actions';
import { AddBook, RemoveBook } from './redux_basics/booksAction';
import { getUser } from './redux_basics/userAction';
import UserCard from './component/UserCard';


import { Container, Row, Col } from 'react-bootstrap';



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
    <Container>

      <Row>
        <Count />
        <Col>
          <Row>
            <Col>
              <button className='btn btn-success' onClick={() => dispatch(increaseCount(data))} >Increment Count</button>
            </Col>
            <Col>
              <button className='btn btn-success' onClick={() => dispatch(decrementCount(data))} >Decrement Count</button>
            </Col>
            <Col></Col>
          </Row>
        </Col>


        <Books />
        <Col>
          <Row>
            <Col>
              <button className='btn btn-success' onClick={() => dispatch(AddBook(book))} >Add a book</button>
            </Col>
            <Col>
              <button className='btn btn-success' onClick={() => dispatch(RemoveBook(book))} >Remove a book</button>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Col>
              <button className='btn btn-success' onClick={() => dispatch(getUser())} >Get User</button>
            </Col>
          </Row>
        </Col>



      </Row>
      <div className='blank-row'></div>
      <Row>
        <Col>
          <UserCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
