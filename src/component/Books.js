
import { useSelector } from 'react-redux'

const Book = () => {
    const res = useSelector((state) => state.bookData)
    console.log("redux data Book component " + JSON.stringify(res))
    return <div>
        <pre>{JSON.stringify(res, undefined, 2)}</pre>
    </div>
}

export default Book;