import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import Pagination from './Components/Pagination';

const App = () => {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [lastPageNumber, setLastPageNumber] = useState(0);

  useEffect(() => {
    console.log('run');
    console.log(recipes);
    axios.get('/search', { params: { query: search, page: pageNumber, lastPage: lastPageNumber } })
      .then(res => {
        setRecipes(res.data.hits);
        setLastPageNumber(res.data.count);
      });
  }, [search, pageNumber]);

  const storeInput = e => {
    setInput(e.target.value);
  };

  const sendRequest = e => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <Form input={input} storeInput={storeInput} sendRequest={sendRequest} recipes={recipes}/>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        lastPageNumber={lastPageNumber}/>
    </div>
  );
};

export default App;
