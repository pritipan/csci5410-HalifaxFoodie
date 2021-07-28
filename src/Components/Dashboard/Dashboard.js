
import { getUserInfo } from '../../utils/AuthUtils';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
    const restaurantMap = [
        {
          _id: 1,
          restaurantname: "Priti's Kitchen",
          title: "Best Indian Cuisine",
          message: "Enjoy the Indian comfort homely food",
        },
        { _id: 2, restaurantname: "Burger King", title: "Find the best burgers in the town here", message: "Find the best burgers in the town here" },
        { _id: 3, restaurantname: "Pizza Place", title: "Find the best pizza in the town here", message: "Find the best pizza in the town here" },
        { _id: 4, restaurantname: "Country Kitchen", title: "Find the best continental in the town here", message: "Find the best continental in the town here" }
      ];

    const user = getUserInfo()
    return (
        <div>
      {/* <Menu></Menu> */}
      <Container>
        <Row className="justify-content-md-center">
          {restaurantMap.map((restaurant) => (
            <Col xs lg="3" md="4">
              <Card className="mb-3" key={restaurant._id} id={restaurant._id}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                />
                <Card.Body>
                  <Card.Title>{restaurant.restaurantname}</Card.Title>
                  <Card.Text>{restaurant.message}</Card.Text>
                  <Button variant="primary">Food Menu</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    )
}

export default Dashboard
