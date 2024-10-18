import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets founds</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              images={pet.images}
              location={pet.city}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
