
import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'

const Book = () => {
    const res = useSelector((state) => state.bookData)
    console.log("redux data Book component " + JSON.stringify(res))
    return <Row>
        <pre>{JSON.stringify(res, undefined, 2)}</pre>
    </Row>
}

export default Book;