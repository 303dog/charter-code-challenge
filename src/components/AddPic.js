import React from 'react'




function importAll(r) {
    let images = {};
    r.keys().map((item, id) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  
  <img src={images['doggy.png']} />