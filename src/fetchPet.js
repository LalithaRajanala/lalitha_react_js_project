// async function to make api call to fetch pets at an id
const fetchPet = async (id) => {
  const result = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!result.ok) {
    throw new Error("Fetching pet failed.");
  }

  return result.json();
};

export default fetchPet;
