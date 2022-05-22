import React from "react";
import Card from "./Card";
import "./Card.css";

function Cards() {
  return (
    <div className="cards__wrapper">
      <Card
        title="AI + RPA is what we do"
        content="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
        link="AI + RPA Automation"
        img="https://www.xivtech.io./rp2.jpg"
      />
      <Card
        title="Make Bolder Choices"
        content="Digital focused strategies to realize market-changing ideas"
        link="Build Better Apps"
        img="https://www.xivtech.io./p1.png"
      />
      <Card
        title="Innovate with Speed"
        content="Create higher quality software, deliver on customer expectations and business goals"
        link="DevOps"
        img="https://www.xivtech.io./p2.jpg"
      />
      <Card
        title="Embrace Cloud"
        content="With Cloud-First accelerate innovation and optimize performance"
        link="Cloud Services"
        img="https://www.xivtech.io./p3.jpg"
      />
      <br />
      <button className="form__button btn">Get in touch</button>
      <hr className="card__hr" />
    </div>
  );
}

export default Cards;
