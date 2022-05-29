import React, { useEffect, useRef } from "react";

function CarDetail({ defaultValue }) {
  const model = useRef();
  const color = useRef();
  const year = useRef();
  useEffect(() => {
    model.current.value = defaultValue.model;
    color.current.value = defaultValue.color;
    year.current.value = defaultValue.year;
  }, [defaultValue]);

  return (
    <div>
      <h1>Chouse your favorite car :</h1>
      <form>
        <label>Model</label>
        <input ref={model}></input>
        <label>Color:</label>
        <input ref={color}></input>
        <label>Year:</label>
        <input ref={year}></input>
        <button type='submit'>invia</button>
      </form>
    </div>
  );
}

export default CarDetail;
