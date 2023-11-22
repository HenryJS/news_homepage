import React from 'react';
import Image1 from '../Assets/image-retro-pcs.jpg';
import Image2 from '../Assets/image-top-laptops.jpg';
import Image3 from '../Assets/image-gaming-growth.jpg'

const OtherNewsSection = () => {
  return (
    <div className="flex justify-between p-8 bg-gray-100">
      {/* News Item 01 */}
      <div className="flex flex-col items-center">
        <img
          src={Image1}
          alt="News 01"
          className="w-16 h-16 mb-2 rounded-full"
        />
        <span className="text-orange-500 font-bold text-lg hover:cursor-pointer hover:text-orange-600 mb-1">
          01
        </span>
        <h3 className="text-lg font-bold hover:cursor-pointer hover:text-orange-500 mb-1">
          Reviving Retro's in PCs
        </h3>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>

      {/* News Item 02 */}
      <div className="flex flex-col items-center">
        <img
          src={Image2}
          alt="News 02"
          className="w-16 h-16 mb-2 rounded-full"
        />
        <span className="text-orange-500 font-bold text-lg hover:cursor-pointer hover:text-orange-600 mb-1">
          02
        </span>
        <h3 className="text-lg font-bold hover:cursor-pointer hover:text-orange-500 mb-1">
          Top 10 Laptops of 2022
        </h3>
        <p>Our best picks for various needs and budgets.</p>
      </div>

      {/* News Item 03 */}
      <div className="flex flex-col items-center">
        <img
          src={Image3}
          alt="News 03"
          className="w-16 h-16 mb-2 rounded-full"
        />
        <span className="text-orange-500 font-bold text-lg hover:cursor-pointer hover:text-orange-600 mb-1">
          03
        </span>
        <h3 className="text-lg font-bold hover:cursor-pointer hover:text-orange-500 mb-1">
          The Growth of Gaming
        </h3>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  );
};

export default OtherNewsSection;
