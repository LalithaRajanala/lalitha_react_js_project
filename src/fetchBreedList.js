// async function to make api call to fetch pets at an id
async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  if (!animal) {
    return [];
  }
  const result = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!result.ok) {
    throw new Error("Fetching breed failed.");
  }

  return result.json();
}

export default fetchBreedList;
