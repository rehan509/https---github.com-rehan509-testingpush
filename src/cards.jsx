import React from "react";


export const Cards = (props) => {
  return (
    <>
   {props.deteils.map((value, index)=> (

      <div className="cards" key={index}>
        <div className="cards-img">
          <img src={value.img} alt="img" />
        </div>
        <div>
          <p className="card-title">{value.title}</p>
          <p className="description">
           {value.descripation}
          </p>
        </div>
      </div>

      ))}
    </>
  );
};

export default Cards;
