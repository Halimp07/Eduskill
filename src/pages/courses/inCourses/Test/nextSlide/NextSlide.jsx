import React from 'react';
import { slideDot } from '@/Data'; // Adjust the import path based on your project structure

export const NextSlide = () => {
  return (
    <div>
        <div>test</div>
      {/* Map over slideDot and render the items */}
      {slideDot.map((slide) => (
        <div key={slide.id}>
          {/* Render each item within slide.items */}
          {slide.items.map((item) => (
            <div key={item.title}>
              {/* Use the anchor element to open links in a new tab */}
              <h2>
                <a href={item.links} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h2>
              {/* Add other components or elements to display the item details */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
