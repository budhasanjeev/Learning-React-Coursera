import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
  
  constructor(props) {
    super(props);
  }

  renderDish(dish) {

    if (dish != null) {
      return(
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }
    else {
      return(
        <div></div>
      )
    }
  }

  renderComments(comments) {

    if (comments) {
      return(
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">

          {comments.map((comment) => {
            return (<li>
              <p> {comment.comment }</p>
              <p> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
            </li>)
          })}

          </ul>
        </div>
      );
    }
    else {
      return (
        <div></div>
      )
    }

  }

  render() {
    return(
      <div className="row">
        {this.renderDish(this.props.selectedDish)}
        {this.renderComments(this.props.selectedDish != null ? this.props.selectedDish.comments : null)}
      </div>
    );
  }
}

export default DishDetail;