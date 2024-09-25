import React from 'react';

const Image = ({className, src,}) => {
    return (
        <img src={src} className={`${className}`} alt={src}/>
          
      
    );
};

export default Image;