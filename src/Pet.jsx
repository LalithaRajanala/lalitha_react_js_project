import React from "react";
import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  const imageUrl =
    images.length > 0
      ? images[0]
      : "http://pets-images.dev-apis.com/pets/none.jpg";
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={imageUrl} alt="picture of the animal" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
        <p>{`Lives in ${location}`}</p>
      </div>
    </Link>
  );
};

export default Pet;
