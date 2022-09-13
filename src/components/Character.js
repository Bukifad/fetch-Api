import React from "react";

export default function Character({ character }) {
  return (
    <div className="card">
      <img className=""  src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">last seen on</p>
        <p style={{color:"white"}}>{character.location.name}</p>
      </div>
    </div>
  );
}
