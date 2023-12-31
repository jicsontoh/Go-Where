import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h1>No Places found</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.image}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.coordinates}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
