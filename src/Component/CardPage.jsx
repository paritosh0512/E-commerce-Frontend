import React from 'react';
import ImageCard from './ImageCard';

const CardPage = () => {
  const cards = [
    {
      id: 1,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg',
      title: '',
      description: '',
    },
    {
      id: 2,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg',
      title: '',
      description: '',
    },
    {
      id: 3,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg',
      title: '',
      description: '',
    },
    {
      id: 4,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108469790.jpg',
      title: '',
      description: '',
    },
    {
      id: 5,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108600862.jpg',
      title: '',
      description: '',
    },
    {
      id: 6,
      image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg',
      title: '',
      description: '',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <ImageCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
