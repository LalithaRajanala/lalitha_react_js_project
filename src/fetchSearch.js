async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  const results = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!results) {
    return new Error(
      "Unable to perform search query with animal,location and breed}",
    );
  }

  return results.json();
}

export default fetchSearch;
