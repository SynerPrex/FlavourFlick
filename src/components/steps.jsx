import React from 'react';

const Steps = ({ steps }) => {
  return (
    <div className=' w-full h-full m-auto flex flex-col justify-center items-center'>
      <h1 className='text-xl'>Procedure</h1>
      <section className="text-gray-600 body-font">
        <div className="container  w-full ">
          <div className="flex flex-col justify-center items-center py-24 flex-wrap w-full ">
            {steps.map((step, index) => (
              <div key={index} className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <h2>{index+1}</h2>
                  </div>
                  <div className="flex-grow pl-4">
                    <p className="leading-relaxed">{step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
