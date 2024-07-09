import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PublicationCard({ imgPath, title, description, ghLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          View Paper
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;