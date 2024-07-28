import React from "react";

const ListItem = () => {
  const categories = [
    "politics",
    "technology",
    "sports",
    "Entertainment",
    "Health",
  ];

  return (
    <>
      <ul>
        {categories.map((e, index) => (
          <li key={index}> {e}</li>
        ))}
      </ul>
    </>
  );
};

export default ListItem;
