import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Pet from "./Pet";

export const SearchParams = () => {
  const ANIMALS = ["cat", "bird", "dog", "dolphin"];
  const [location, setLocation] = useState("Seattle");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const results = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await results.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="locationField">Location</label>
        <input
          className="search-params"
          id="locationField"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option></option>
          {ANIMALS.map((animal) => (
            <option>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          disabled={breeds.length === 0}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option></option>
          {breeds.map((breed) => (
            <option>{breed}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
      {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            breed={pet.breed}
            animal={pet.animal}
            key={pet.id}
          />
        );
      })}
    </div>
  );
};
