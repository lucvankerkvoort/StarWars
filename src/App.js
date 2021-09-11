import React from "react";
import { UsersProvider } from "./Context";
import Characters from "./Pages/characters";

export default function App() {
  return (
    <UsersProvider>
      <div className="App">
        <Characters />
      </div>
    </UsersProvider>
  );
}
