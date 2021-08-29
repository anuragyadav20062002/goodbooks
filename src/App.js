import React from "react";
import { useState } from "react";
import "./styles.css";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("buisness");
  function clickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <h3>Checkout my favorite books. Select a genre to get started</h3>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button OnClick={clickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {Object.keys(selectedGenre).map((item) => (
            <li key={item.value}>
              <div>{item.name}</div>
              <div>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
