'use client';

import { sendGAEvent } from '@next/third-parties/google';
import React from 'react';

export default function ButtonSendEvent() {
  const handleEvent1 = React.useCallback(() => {
    sendGAEvent('event', 'add_to_cart', {
      event_category: 'ecommerce',
      event_label: 'Product Name',
      value: 100, // Example value or quantity
      items: [
        {
          item_name: 'Product Name', // Name of the product
          price: 100, // Price
          quantity: 1, // Quantity
        },
      ],
      ecommerce: {
        items: [
          {
            item_name: 'Product Name', // Name of the product
            price: 100, // Price
            quantity: 1, // Quantity
          },
        ],
      },
    });
  }, []);

  return (
    <div className='flex gap-2'>
      <button
        className='border border-white p-1 rounded'
        onClick={handleEvent1}
      >
        Send event 1
      </button>
    </div>
  );
}
