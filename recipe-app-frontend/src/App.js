import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import Pagination from './Components/Pagination';

const App = () => {
  const [input, setInput] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageNumber, setLastPageNumber] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios.get('/search', {
      params: {
        query: search, page: pageNumber, lastPage: lastPageNumber,
      },
    })
      .then(res => {
        if (res.data.more) {
          setRecipes(res.data.hits);
          setLastPageNumber(res.data.count);
          // setIsLoading(false);
        } else {
          setRecipes([0]);
          setLastPageNumber(-1);
        }
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
        lastPageNumber={lastPageNumber}
        search={search}
        />
    </div>
  );
};

export default App;
