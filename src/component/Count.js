import { useSelector } from 'react-redux'

const Count = () => {
    const res = useSelector((state) => state.countData)
    console.log("redux store data in Count component " + JSON.stringify(res))
    return <div>
        <h3>Count : {res.count}</h3>
    </div>
}

export default Count;