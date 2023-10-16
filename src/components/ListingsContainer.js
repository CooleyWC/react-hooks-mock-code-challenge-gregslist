import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchQuery, setSearchQuery}) {
const [listingData, setListingData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);


useEffect(()=>{
  fetch('http://localhost:6001/listings')
  .then(res=>res.json())
  .then(data=>{
    setListingData(data)
    setIsLoaded(true)
  })
}, [])

if(!isLoaded) return <h1>Loading...</h1>

function handleDeleteClick(itemId){
  fetch(`http://localhost:6001/listings/${itemId}`,{
    method: "DELETE"
  })
  .then(res=>res.json())
  .then(()=>console.log('deleted'))

  const listingAfterDelete = listingData.filter((item)=>{
   return item.id !== itemId
  })
  setListingData(listingAfterDelete)
}

const filteredListings = listingData.filter((item)=>{
// console.log(searchQuery)
  return item.description.toLowerCase().includes(searchQuery.toLowerCase())
})

// console.log(searchItems)


const listingCards = filteredListings.map((item)=>{
  return <ListingCard 
  itemId={item.id}
  key={item.id} 
  description={item.description} 
  image={item.image} 
  location={item.location}
  onDeleteClick={handleDeleteClick}
  />
})

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
