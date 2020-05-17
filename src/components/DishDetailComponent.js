import React from "react";
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

function RenderDish({ dish }) {
  return (
    <React.Fragment>
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    const com = comments.map((co) => {
      return (
        <div className="col-12 col-md-10">
          <h4>Comments</h4>
          <React.Fragment>
            <li>{co.comment}</li>
            <br />
            <li>
              -- {co.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(co.date)))}
            </li>
            <br />
          </React.Fragment>
        </div>
      );
    });
    return <ul className="list-unstyled">{com}</ul>;
  } else {
    return <div></div>;
  }
}

export default DishDetail;
