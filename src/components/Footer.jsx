import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    // Fetch and increment view count
    fetch('https://api.countapi.xyz/hit/ronflakes-portfolio/visits')
      .then(res => res.json())
      .then(data => {
        setViewCount(data.value);
      })
      .catch(() => {
        // Silently fail if API is down
        setViewCount(null);
      });
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6'>
      <div className='flex items-center justify-between'>
        <img className='invert h-5 lg:h-9' src="assets/logo.png" alt="" />

        <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right'>
          {viewCount && (
            <p className='text-gray-400 text-[10px] lg:text-xs mb-2 lg:mb-3'>
              👁️ <span className='text-white'>{formatNumber(viewCount)}+</span> views
            </p>
          )}
          <p>@ 2025 Portfolio</p>
          <p>Made by Ron Taruc</p>
        </div>
      </div>
    </div>
  )
}
