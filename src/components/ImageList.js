import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

/*const ImageList = props =>
{
  const images = props.images.map(({ description, id, urls }) =>
  {
      return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div className="image-list">{images}</div>;
};*/


const ImageList = props =>
{
  const images = props.images.map((image) =>
  {
   return <ImageCard image={image} key={image.id} />;
  });

  return <div className="image-list">{images}</div>;
};


export default ImageList;
