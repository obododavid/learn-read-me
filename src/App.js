import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useDebounce from './useDebounce';
import MouseTracker from './renderProps/mousetracker';

const App = () => {
  console.log('i mounted')
  const [searchTerm, setSearchTerm] = useState('');
  const _searchTerm = useDebounce(searchTerm, 3000);

  useEffect(() => {
    if (_searchTerm) {
      console.log(_searchTerm)
    }
  }, [_searchTerm])

  // return (
  //   <div>
  //     Type here
  //     <input type='text' onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
  //   </div>
  // )

  return (
    <div>
      <MouseTracker />
    </div>
  )
}

export default App;
