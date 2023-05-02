import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-around ">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <Link to={"/video/" + i}>
          <Card key={i} id={i} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
