import { useState, useEffect } from "react";

export default function useBreedList(animal) {
  // Setup local cache not to fetch from api again
  const localCache = {};

  // Set states for variables
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList(animal);
    }

    async function requestBreedList(animal) {
      const apiCall = `https://pets-v2.dev-apis.com/pets?animal=${animal}`;

      const results = await fetch(apiCall);
      const json = await results.json();

      const breeds = json.pets.map((pet) => pet.breed);
      localCache[animal] = breeds || [];

      setBreedList(localCache[animal]);
    }
  }, [animal]);

  return [breedList];
}
