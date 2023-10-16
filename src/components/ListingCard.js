import React, {useState} from "react";

function ListingCard({itemId, description, image, location, onDeleteClick}) {
  const [favBtn, setFavBtn] = useState(false)


  function handleFavBtn(){
    setFavBtn(!favBtn)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details" onClick={handleFavBtn}>
        {favBtn ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>onDeleteClick(itemId)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
