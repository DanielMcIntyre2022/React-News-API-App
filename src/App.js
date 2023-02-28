import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

const [ news, setNews ] = useState();

useEffect(() => {

  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  .then(response => {
  console.log(response.data.articles)
  setNews(response.data.articles)
});

},[])

  return (
    <div className="App">
      <h1>News App</h1>
    </div>
  );
}

export default App;
