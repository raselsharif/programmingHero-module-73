import React from "react";

const AboutDynamic = ({ params, searchParams }) => {
  //   console.log(params.id);
  console.log(searchParams);

  return (
    <div>
      <h2>Dynamic page {params.id}</h2>
      <h2>Search Category: {searchParams.category}</h2>
    </div>
  );
};

export default AboutDynamic;
