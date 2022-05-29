import React, { useMemo } from "react";

function FilteredList({ adultFilter, person }) {
  const adult = useMemo(() => adultFilter(person), [person, adultFilter]);
  return (
    <div>
      {adult.map((el) => {
        return (
          <div key={el.id}>
            <h1>
              {el.name}
              <span>: {el.age}</span>
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default FilteredList;
