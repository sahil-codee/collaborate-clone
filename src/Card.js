import React from "react";
import "./Card.css";
import { CgArrowLongRight } from "react-icons/cg";
import Slide from "react-reveal/Slide";

function Card({ title, content, link, img }) {
  return (
    <div className="card__container">
      <Slide bottom>
        <div className="card__details">
          <div className="card__titleContainer">
            <h4 className="card__title">{title}</h4>
            <div className="card__imageContainer">
              <img className="card__image card__img" src={img} alt="" />
            </div>
          </div>
          <div className="card__contentContainer">
            <p className="card__content">{content}</p>
          </div>
          <div className="card__linkContainer">
            <a className="card__link" href="#a">
              {link}
            </a>
            <CgArrowLongRight className="card__arrow" fontSize="30px" />
          </div>
        </div>
        <div className="card__imageContainer">
          <img className="card__image card__rightImage" src={img} alt="" />
        </div>
      </Slide>
    </div>
  );
}

export default Card;
