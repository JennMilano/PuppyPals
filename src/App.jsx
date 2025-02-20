import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './index.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);

  console.log(featuredPup) 

  function handleClick() {
    // some logic here
  }

  return (
 
    <div className="App">

      {puppies.map((puppy) => {
        return (
          <p onClick={() => {
            console.log("puppy id: ", puppy.id);  // Log the puppy ID
            setFeatPupId(puppy.id);  // Set the featured puppy ID
          }}
          key={puppy.id}
        >
          {puppy.name}
          </p>
        );
      })}

{featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>

  );
}


export default App
