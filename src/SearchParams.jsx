import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["cat", "bird", "dog", "dolphin"];

export const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);
  const searchResults = useQuery({
    queryFn: fetchSearch,
    queryKey: ["search", requestParams],
  });
  const pets = searchResults?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formObj = {
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
            animal: formData.get("animal") ?? "",
          };

          setRequestParams(formObj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="locationField">Location</label>
        <input
          className="search-params"
          name="locationField"
          id="locationField"
          placeholder="location"
        />

        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option></option>
          {ANIMALS.map((animal) => (
            <option>{animal}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={breeds?.length === 0}>
          <option></option>
          {breeds?.map((breed) => (
            <option>{breed}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
      <Results pets={pets} />
    </div>
  );
};
