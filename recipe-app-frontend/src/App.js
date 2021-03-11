import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Components/Form';

const App = () => {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('run');
    console.log(recipes);
    axios.get('/search', { params: { query: search } })
      .then(res => setRecipes(res.data.hits));
  }, [search]);

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
    </div>
  );
};

export default App;
