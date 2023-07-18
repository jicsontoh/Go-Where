import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./PlaceForm.css";

const places = [
  {
    id: "p1",
    title: "Marina Bay Sands",
    description:
      "Marina Bay Sands is a destination for those who appreciate luxury. An integrated resort notable for transforming Singapore’s city skyline, it comprises three 55-storey towers of extravagant hotel rooms and luxury suites with personal butler services.",
    img: "",
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
    img: "",
    address: "30 Raffles Avenue, Singapore 039803",
    coordinates: {
      lat: 1.2893,
      lng: 103.8631,
    },
    creatorId: "u2",
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const [isLoading, setIsLoading] = useState(true);

  const foundPlaces = places.find((p) => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (foundPlaces) {
      setFormData(
        {
          title: {
            value: foundPlaces.title,
            isValid: true,
          },
          address: {
            value: foundPlaces.address,
            isValid: true,
          },
          description: {
            value: foundPlaces.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, foundPlaces]);

  if (!foundPlaces) {
    return (
      <div className="center">
        <h2>Cannot find place!</h2>
      </div>
    );
  }

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
