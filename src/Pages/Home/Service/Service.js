import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  console.log(img);
  return (
    <div className="service mt-5">
      <img className="w-100" src={img} alt="" />
      <h2 className="mt-5 mb-5"> {name}</h2>
      <p className="px-5">
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="check-more mt-2"
      >
        Check More
      </button>
    </div>
  );
};

export default Service;
