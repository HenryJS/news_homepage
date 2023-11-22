import React from 'react';
import HomeBanner from '../Assets/image-web-3-desktop.jpg';

const HomeSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8 bg-white-800">
      {/* Left Side */}
      <div className="lg:col-span-3 flex flex-col">
        <img
          src={HomeBanner}
          alt="Web 3.0"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <div className="flex">
          <h2 className="text-2xl font-bold h-6 mb-2">The bright <br></br>future of web 3.0</h2>
          <p className="ml-4 mb-2">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          </p>
        </div>
        <button className="bg-gray-800 text-white py-2 px-4 rounded inline-block  ml-14 hover:bg-gray">
          Read more
        </button>
      </div>

      {/* Right Side */}
      <div className="lg:col-span-1 bg-gray-800">

            <h3 className="text-2xl font-bold mb-2 hover:text-orange-500 cursor-pointer text-left text-white">
            New
            </h3>
            <p className="mb-2 text-left text-white">Hydrogen vs Electric cars</p>
            <p className="mb-4 text-white">Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr className="border-white my-4" />
            <h3 className="text-2xl font-bold mb-2  text-white text-left hover:text-orange-500 cursor-pointer">
            The downside of AI Artistry
            </h3>
            <p className="mb-4  text-white text-left">What are the possible adverse effects of on-demand AI image generation?</p>
            <hr className="border-white my-4" />
            <h3 className="text-2xl font-bold mb-2 hover:text-orange-500 cursor-pointer text-white text-left">
            Is VC Funding Drying Up?
            </h3>
            <p className='text-white text-left'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
  );
};

export default HomeSection;
