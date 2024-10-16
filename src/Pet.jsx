import React from "react";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  const imageUrl =
    images.length > 0
      ? images[0]
      : "http://pets-images.dev-apis.com/pets/none.jpg";
  return (
    <a href={`/details/${id}`}>
      <div className="pet">
        <div className="image-container">
          <img src={imageUrl} alt="picture of the animal" />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{animal}</h2>
          <h2>{breed}</h2>
          <p>{`Lives in ${location}`}</p>
        </div>
      </div>
    </a>
  );
};

export default Pet;
