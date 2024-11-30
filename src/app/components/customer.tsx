import React from 'react';
import Image from 'next/image';

const Customer = () => {
  return (
    <div className="w-[1280px] h-[830.89px] flex justify-center items-center bg-[#F7F7F7]">
      <div>
        {/* Header Section */}
        <div className="w-[560px] h-[109px] ">
          <h1 className="font-bold w-[560px] h-[58px] text-4xl">Customer testimonials</h1>
          <p className="w-[560px] h-[27px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        
        <div className="w-[1152px] h-[417.89px]  flex justify-between  gap-4 p-6">
          {/* Box 1 */}
          <div className="border border-black h-[321.81px] w-[362.67px] flex flex-col items-center  ">
            <Image
              src="/image/Stars.png"
              alt="Stars"
              width={116}
              height={18.89}
              className="mt-10"
            />
            <div className="h-[215px] w-[298.67px] flex flex-col mt-10">
              <p className="h-[135px] w-[298px] ">
                "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/>
                Suspendisse varius enim in eros <br/> elementum tristique.
                Duis cursus, mi<br/> quis viverra ornare."
              </p>

              <div className="flex flex-row items-center gap-4 mt-4">
                <Image
                  src="/image/pic3.png"
                  alt="pic"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-bold">James Nduku</h2>
                  <p className="text-sm text-gray-600">Software Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className=" border border-black h-[321.81px] w-[362.67px] flex flex-col items-center ">
            <Image
              src="/image/Stars.png"
              alt="Stars"
              width={116}
              height={18.89}
              className="mt-10"
            />
            <div className="h-[215px] w-[298.67px] flex flex-col mt-10">
              <p className="h-[135px] w-[298px]">
                "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/>
                Suspendisse varius enim in eros<br/> elementum tristique.
                Duis cursus, mi<br/> quis viverra ornare."
              </p>

              <div className="flex flex-row items-center gap-4 mt-4">
                <Image
                  src="/image/pic1.png"
                  alt="pic"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-bold">Erick Kipkemboi</h2>
                  <p className="text-sm text-gray-600">Scrum Master</p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className=" border border-black  h-[321.81px] w-[362.67px] flex flex-col items-center ">
            <Image
              src="/image/Stars.png"
              alt="Stars"
              width={116}
              height={18.89}
              className="mt-10"
            />
            <div className="h-[215px] w-[298.67px] flex flex-col mt-10">
              <p className="h-[135px] w-[298px] ">
                "Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/>
                Suspendisse varius enim in eros<br/> elementum tristique.
                Duis cursus, mi<br/> quis viverra ornare."
              </p>

              <div className="flex flex-row items-start gap-4 mt-4 ">
                <Image
                  src="/image/pic6.png"
                  alt="pic"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-bold">Stephen Kerubo</h2>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>
            </div>
            </div> 
            
          </div>
         <div className='flex justify-center h-[48px] w-[1152px]  -mt-14'>
             <Image
             src='/image/Content.png'
             alt='contect'
             height={48}
              width={1152}
             />
            </div>
      </div>
    </div>
  );
};

export default Customer;
