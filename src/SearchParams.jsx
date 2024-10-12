import { useState } from "react";

export const SearchParams = () => {
  const ANIMALS = ["cat", "bird", "dog", "dolphin"];
  const breeds = ["lab"];
  const [location, setLocation] = useState("Lalitha state");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div class="search-params">
      <form>
        <label htmlFor="locationField">Location</label>
        <input
          className="search-params"
          id="locationField"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />

        <label for="animal">Animal</label>
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

        <label for="breed">Breed</label>
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
      </form>
    </div>
  );
};
