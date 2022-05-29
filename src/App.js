import React from "react";
import FilteredList from "./FilteredList";
const person = [
  { id: 0, name: "enrico", age: 18 },
  { id: 1, name: "marco", age: 15 },
  { id: 2, name: "gianmarco", age: 21 },
  { id: 3, name: "mariottide", age: 13 },
  { id: 4, name: "pulcinella", age: 22 },
];
const adult = (x) => {
  const adultFilter = person.filter((person) => person.age >= 18);
  return adultFilter;
};

function App() {
  return (
    <div className='App'>
      <>
        <FilteredList person={person} adultFilter={adult} />
      </>
    </div>
  );
}

export default App;
