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
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              key={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
