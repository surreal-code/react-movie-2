import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
};

const foodILike = [
  {
    id : 1,
    name :"Kimchi",
    image : "https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_1280.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "Samgyeosal",
    image : "https://1.bp.blogspot.com/-9HbXc24D3dw/XLmVQ3r5OOI/AAAAAAAAEUc/3LeiA8iDOloUN3djPUCX70ueWHrac69GACLcBGAs/s640/pork%2Bbelly%2Bkimchi.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name : "Bibimbap",
    image : "https://www.recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg",
    rating : 4.5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish=> (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
