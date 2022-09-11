import { useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'

const Count = () => {
    const res = useSelector((state) => state.countData)
    console.log("redux store data in Count component " + JSON.stringify(res))

    return <Row>
        <h3>Count : {res.count}</h3>
    </Row>

}

export default Count;