import React from "react";

import {useParams} from "react-router-dom"

function ShowStudents({teachers}) {
    const params = useParams();

    console.log("params", params)
  return (
    <div>
      <h3>hello</h3>
    </div>
  );
}

export default ShowStudents;