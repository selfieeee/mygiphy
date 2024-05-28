import React, { useState } from 'react';
import GifGrid from './components/GifGrid';
import './styles.css';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('trending'); // Устанавливаем начальный запрос

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('query') as HTMLInputElement;
    setQuery(input.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Giphy Search</h1>
        <form onSubmit={handleSearch}>
          <input type="text" name="query" placeholder="Search for gifs..." />
          <button type="submit">Search</button>
        </form>
        <GifGrid query={query} />
      </div>
    </div>
  );
};

export default App;