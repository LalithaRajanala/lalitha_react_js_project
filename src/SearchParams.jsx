import { useState } from "react";
export const SearchParams = () => {
  const ANIMALS = ["cat", "bird", "dog", "dolphin"];
  const [location, setLocation] = useState("Lalitha state");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];

  return (
    <div>
      <form>
        <label htmlFor="locationField">"Enter location"</label>
        <input
          className="search-params"
          id="locationField"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />

        <label for="animal">Select your fav animal:</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        >
          {ANIMALS.map((animal) => (
            <option>{animal}</option>
          ))}
        </select>

        <label for="breed">Select your fav animal breed:</label>
        <select
          id="breed"
          value={breed}
          disabled={breeds.length === 0}
          onChange={(e) => setBreed(e.target.value)}
        >
          {breeds.map((breed) => (
            <option>{breed}</option>
          ))}
        </select>
      </form>
    </div>
  );
};
