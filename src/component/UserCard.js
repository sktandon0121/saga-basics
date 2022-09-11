import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'


const Address = ({ address }) => {

	return <div>
		<span>{address.street}, {address.suite}, {address.city} {address.zipcode}  </span>
	</div>
}


function UserCard() {
	const data = useSelector((state) => state.userData);
	console.log("user data in store ", data)
	return (

		<Row>
			{
				data.map((el, index) => {

					return <Col key={el.username + "_" + index}>
						<Card className='blank-row' style={{ width: '18rem' }}>
							<Card.Body >
								<Card.Title>{el.name}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">{`${el.username} (${el.website})`}</Card.Subtitle>
								<Card.Text>
									{el.address.street}, {el.address.suite}, {el.address.city} {el.address.zipcode}
									<li style={{ listStyle: "none" }}>Phone : {el.phone}</li>
								</Card.Text>
								<Card.Link href="#">{el.email}</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				})
			}
		</Row>


	);
}

export default UserCard;