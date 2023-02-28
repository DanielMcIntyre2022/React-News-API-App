import './App.css';
import axios from 'axios';
import NewsDisplay from './components/NewsDisplay';
import { useState, useEffect } from 'react';

function App() {

const [ news, setNews ] = useState([]);

useEffect(() => {

  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
  .then(response => {
  setNews(response.data.articles)
});

},[])

  return (
    <div className="App">
      <div>
        <NewsDisplay news={news}/>
      </div>
    </div>
  );
}

export default App;
