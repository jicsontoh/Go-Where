import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import image from "./mbs-place.jpg";
import image2 from "./sg-flyer-place.jpg";

const UserPlaces = () => {
  const places = [
    {
      id: "p1",
      title: "Marina Bay Sands",
      description:
        "Marina Bay Sands is a destination for those who appreciate luxury. An integrated resort notable for transforming Singapore’s city skyline, it comprises three 55-storey towers of extravagant hotel rooms and luxury suites with personal butler services.",
      img: image,
      address: "10 Bayfront Avenue, Singapore 018956",
      coordinates: {
        lat: 1.2838,
        lng: 103.8591,
      },
      creatorId: "u1",
    },
    {
      id: "p2",
      title: "Singapore Flyer",
      description:
        "A giant observation wheel that stands amidst the skyscrapers in the Singapore skyline, the Singapore Flyer is the go-to attraction for the most magnificent views of our city.",
      img: image2,
      address: "30 Raffles Avenue, Singapore 039803",
      coordinates: {
        lat: 1.2893,
        lng: 103.8631,
      },
      creatorId: "u2",
    },
  ];

  const userId = useParams().userId;
  const loadedPlaces = places.filter((place) => place.creatorId === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
