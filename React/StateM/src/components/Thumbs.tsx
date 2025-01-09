import React from 'react';

interface ThumbsProps {
  items: { id: number; title: string; image: string }[];
  currentIndex: number;
  selectedCatalog: (index: number) => void;
}

const Thumbs: React.FC<ThumbsProps> = ({ items, currentIndex, selectedCatalog }) => {
  return (
    <div className="thumbnails">
      {items.map((item, index) => (
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          onClick={() => selectedCatalog(index)}
          style={{
            border: index === currentIndex ? '2px solid blue' : 'none',
            cursor: 'pointer',
            margin: '5px',
            width: '60px',
            height: '60px',
          }}
        />
      ))}
    </div>
  );
};

export default Thumbs;
