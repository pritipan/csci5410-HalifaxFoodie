import React, { useEffect } from "react";
// import Meta from "../../components/Meta";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Card from "react-bootstrap/Card";

const pageTitle = "Food Reviews"


function CustomerReviews() {
  

  useEffect(async () => {

    const wordlCloudURL =  'http://localhost:8081/reviews/getWordCloudData';
    axios.get(wordlCloudURL).then((repos) =>{
      const wordCloudData = repos.data;
      var options = {
        method: 'POST',
        url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': 'e431dd7fdfmshd3726113c399fe8p1e9deejsn79afd24059bc',
          'x-rapidapi-host': 'textvis-word-cloud-v1.p.rapidapi.com'
        },
        data: {
          text: wordCloudData,
          scale: 1,
          width: 1500,
          height: 1500,
          colors: ['#375E97', '#FB6542', '#FFBB00', '#3F681C'],
          font: 'Tahoma',
          use_stopwords: true,
          language: 'en',
          uppercase: false
        }
      };

     let responseWD =  axios.request(options).then(function (response) {
       var textWD = response.data;
        var img = document.getElementById("wordCloud");
        img.src = textWD;
        img.height = 1000;
        img.width = 1000;

    });


    })


  }, []);

  
  const submitReview = event=> {

    var submitFeedback = {
      method: 'POST',
      url: 'http://localhost:8081/reviews/submitreviews',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        review: event.target.reviewData.value,
        foodItemName: event.target.cuisineName.value,
        restaurantName: event.target.restaurantName.value
      } 
    };

     axios.request(submitFeedback).then(function (responseComprehend) {
       var review = responseComprehend.data;

   });
    
  } 

  return (
    <div>

      <Card className="mb-3">
              <Card.Header>
                <p className="message-header">Word cloud</p>
              </Card.Header>
              <Card.Body>
                <div>
                  {useEffect.responseWD}
                </div>
                <img id="wordCloud" />
              </Card.Body>
            </Card>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            <Card className="mb-3">
              <Card.Header>Enter feedback</Card.Header>
              <Card.Body>
                <Form onSubmit={submitReview}>
                  <Form.Group controlId="title">
                    <Form.Label>Resturant name</Form.Label>
                    <Form.Control as="select" name="restaurantName" required>
                      <option value="Priti's Kitchen">Priti's Kitchen</option>
                      <option value="Burger King">Burger King</option>
                      <option value="Pizza Place">Pizza Place</option>
                      <option value="Country Kitchen">Country Kitchen</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="title">
                    <Form.Label>Food Item Name</Form.Label>
                    <Form.Control
                      type="input"
                      name="cusineName"
                      placeholder="Enter the food item name"
                      required
                      minLength="5"
                      onChange=""
                    />
                  </Form.Group>
                  <Form.Group controlId="textFeedback">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      minLength="5"
                      name="reviewData"
                      placeholder="enter feedback"
                      required
                      onChange=""
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    style={{ float: "right" }}
                    variant="primary"
                  >
                    Add
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
    
  );

}

export default CustomerReviews;