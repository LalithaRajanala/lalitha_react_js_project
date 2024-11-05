import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import Carousal from "./Carousal";
import fetchPet from "./fetchPet";
import ErrorBoundary from "./ErrorBoundary";
import AdoptedPetContext from "./AdoptedPetContext";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const navigate = useNavigate();
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
        <Carousal images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>
            {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          </h2>
          <button
            onClick={() => {
              return setShowModal(true);
            }}
          >
            Adopt {pet.name}
          </button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <h1>Do you want to adopt {pet.name} ?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Details;
