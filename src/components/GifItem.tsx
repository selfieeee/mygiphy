import React from 'react';

interface GifItemProps {
  title: string;
  url: string;
}

const GifItem: React.FC<GifItemProps> = ({ title, url }) => (
  <div className="gif-item">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);

export default GifItem;