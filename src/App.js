import React from 'react';
import './App.css';
import MovieList from './MovieList';

const movies = [
  {
    title: 'Barbie',
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRiaMsHYpdf80moiUHsYEMWN_RR2O0jagD3Nu73-5VBYYrm3uCN',
  },
  {
    title: 'Oppenheimer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0niU5_-nJcGruRTitqp6LWLeP5Av8LnPWcJ4eUz8avZ9zpXb',
  },
  {
    title: 'A haunting in Venice',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0PoDEssre1izKVtJBV3pbUILe1pVFCrodxrmCHKQS8eo6zLQ3',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;


