// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dog image from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
