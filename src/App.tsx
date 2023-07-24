import { useState } from 'react';
import './App.css';
import { Results } from './components/results/results';
import { Search } from './components/search';
import { resultsData } from './components/results/data/resultsData';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState(resultsData);
  
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Results results={results} searchTerm={searchTerm} setResults={setResults} />
    </>
  );
}

export default App;
