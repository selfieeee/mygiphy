import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GifItem from './GifItem';

interface Gif {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

interface GifGridProps {
  query: string;
}

const GifGrid: React.FC<GifGridProps> = ({ query }) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=FOPPdtrMZJuXxGLWLd1Rp1rpkz6eBhzM&q=${query}&limit=20`
        );
        setGifs(response.data.data);
      } catch (error) {
        console.error('Error fetching gifs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, [query]);

  return (
    <div className="gif-grid">
      {loading ? (
        <p>Loading...</p>
      ) : (
        gifs.map((gif) => (
          <GifItem key={gif.id} title={gif.title} url={gif.images.downsized_medium.url} />
        ))
      )}
    </div>
  );
};

export default GifGrid;