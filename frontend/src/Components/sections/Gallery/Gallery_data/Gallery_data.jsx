import React from 'react';
import Gallery_cards from '../Gallery_cards/Gallery_cards';



const galleryData = [
  { id: 1, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-1.jpg" },
  { id: 2, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-2.jpg" },
  { id: 3, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-3.jpg" },
  { id: 4, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-4.jpg" },
  { id: 5, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-5.jpg" },
  { id: 6, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-6.jpg" },
  { id: 7, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-7.jpg" },
  { id: 8, img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-8.jpg" },
];
export default function Gallery_data(onImageClick) {
  

  return galleryData.map((item, index) => <Gallery_cards key={index} data={item} onClick={() => onImageClick(index)} />);
}

export { galleryData };