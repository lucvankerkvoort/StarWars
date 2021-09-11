import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context";

const Characters = () => {
  const { state, getCharacters, selectCharacter } = useContext(UsersContext);
  const { people = [], characters = [] } = state;

  console.log(state);
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {people.map((person) => (
        <>
          <button onClick={() => selectCharacter(person.uid)}>
            {person.name}{" "}
          </button>
          <br />
        </>
      ))}
    </div>
  );
};

export default Characters;
