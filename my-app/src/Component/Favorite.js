import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

export class Favorite extends Component {
  state = {
    favData: [],
    err: "",
    show: false,
    modalData: {},
  };

  componentDidMount() {
    let url = `${process.env.REACT_APP_SERVER}/getFavData`;
    axios.get(url).then((response) => {
      this.setState({ favData: response.data });
    });
  }

  deleteFav = (item) => {
    let name = item.name;
    // console.log(name);
    let url = `${process.env.REACT_APP_SERVER}/deleteFavData/${name}`;

    axios.delete(url).then((response) => {
      // console.log(response.data);
      this.setState({ favData: response.data });
    });
  };

  showModal = (item) => {
    this.setState({ show: true, modalData: item });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  updateData = (e) => {
    e.preventDefault();

    let dataBody = {
      name: e.target.name.value,
      url: e.target.url.value,
      target: this.state.modalData.name,
    };
    let url = `${process.env.REACT_APP_SERVER}/updateFavData`;

    axios.put(url, dataBody).then((response) => {
      // console.log(response.data);
      this.setState({ favData: response.data });
    });
  };

  render() {
    return (
      <div>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <div className="card-container">
            {this.state.favData.map((item, i) => {
              return (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.url}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.deleteFav(item)}
                    >
                      delete
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => this.showModal(item)}
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}

        <UpdateModal
          show={this.state.show}
          modalData={this.state.modalData}
          closeModal={this.closeModal}
          updateData={this.updateData}
        />
      </div>
    );
  }
}

export default Favorite;
