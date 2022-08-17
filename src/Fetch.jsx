import React, { useEffect, useState } from "react";

// Fetch is normally done inside useEffect

const Fetch = () => {
  // To access the data

  const [restaurant, setRestaurant] = useState(null);

  const url =
    "https://random-data-api.com/api/restaurant/random_restaurant?size=5";
  useEffect(() => {
    fetch(url)
      // its stringify
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(restaurant);
  return <div>Fetch</div>;
};

export default Fetch;
