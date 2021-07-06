import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

export class Home extends Component {
  state = {
    allData: [],
    err: "",
  };

  // i want when click on home to display data from API
  componentDidMount = () => {
    const url = `${process.env.REACT_APP_SERVER}/allData`;

    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        this.setState({ allData: response.data });
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  addFav = (i) => {
    let targetData = this.state.allData[i];
    // console.log(this.state.allData[i]);

    let dataBody = {
      name: targetData.name,
      url: targetData.url,
    };
    // console.log(dataBody);

    const url = `${process.env.REACT_APP_SERVER}/addFav`;
    axios
      .post(url, dataBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({ err: err.message });
      });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="card-container">
            {this.state.allData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.url}</Card.Text>
                    <Button variant="primary" onClick={() => this.addFav(i)}>
                      Add fav
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Home;
