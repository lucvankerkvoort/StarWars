import React, { useState, createContext } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
  const [state, dispatch] = useState({});
  const getCharacters = async () => {
    return await fetch("https://www.swapi.tech/people")
      .then((res) => res.json())
      .then((starwars) => dispatch({ people: starwars.results }))
      .catch((error) => console.log("error happened", error));
  };
  const selectCharacter = async (id) => {
    return await fetch(`https://www.swapi.tech/people/${id}`)
      .then((res) => res.json())
      .then((starwars) => dispatch({ character: starwars.result }))
      .catch((error) => console.log("error happened", error));
  };

  return (
    <UsersContext.Provider value={{ state, getCharacters, selectCharacter }}>
      {props.children}
    </UsersContext.Provider>
  );
};
