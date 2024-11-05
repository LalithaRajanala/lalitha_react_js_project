import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousal from "./Carousal";
import fetchPet from "./fetchPet";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const { id } = useParams();
  const results = useQuery({
    queryKey: ["details", id],
    queryFn: fetchPet,
  });

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">0</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <ErrorBoundary>
      <div className="details">
        <Modal />
        <Carousal images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>
            {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          </h2>
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Details;
