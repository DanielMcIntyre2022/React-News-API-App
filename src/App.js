import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
.then(response => {
  console.log(response)
});

function App() {

  const [ news, setNews ] = useState();

  return (
    <div className="App">
      <h1>News App</h1>
    </div>
  );
}

export default App;
