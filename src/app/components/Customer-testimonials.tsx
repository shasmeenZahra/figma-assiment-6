import React from 'react';
import Image from 'next/image';

const Customer = () => {
  return (
    <div className="w-full bg-[#F7F7F7] py-16 flex justify-center items-center">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-2xl md:text-4xl mb-2">Customer Testimonials</h1>
          <p className="text-gray-600">Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-white shadow-md border border-black p-6 flex flex-col items-center">
            <Image src="/image/Stars.png" alt="Stars" width={116} height={18.89} />
            <p className="text-center text-gray-600 mt-6 mb-8">
            &#apos;&#apos; Lorem ipsum dolor sit amet &#44; consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus &#44; mi quis viverra ornare. &#apos;&#apos;
            </p>
            <div className="flex items-center gap-4">
              <Image src="/image/pic3.png" alt="pic" width={50} height={50} className="rounded-full" />
              <div>
                <h2 className="font-bold">James Nduku</h2>
                <p className="text-sm text-gray-500">Software Developer</p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-md border border-black p-6 flex flex-col items-center">
            <Image src="/image/Stars.png" alt="Stars" width={116} height={18.89} />
            <p className="text-center text-gray-600 mt-6 mb-8">
            &#apos;&#apos; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis viverra ornare . &#apos;&#apos;
            </p>
            <div className="flex items-center gap-4">
              <Image src="/image/pic1.png" alt="pic" width={50} height={50} className="rounded-full" />
              <div>
                <h2 className="font-bold">Erick Kipkemboi</h2>
                <p className="text-sm text-gray-500">Scrum Master</p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-md border border-black p-6 flex flex-col items-center">
            <Image src="/image/Stars.png" alt="Stars" width={116} height={18.89} />
            <p className="text-center text-gray-600 mt-6 mb-8">
            &#apos;&#apos; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
              elementum tristique. Duis cursus, mi quis viverra ornare. &#apos;&#apos;
            </p>
            <div className="flex items-center gap-4">
              <Image src="/image/pic6.png" alt="pic" width={50} height={50} className="rounded-full" />
              <div>
                <h2 className="font-bold">Stephen Kerubo</h2>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Image Section */}
        <div className="mt-12 flex justify-center">
          <Image src="/image/Content.png" alt="Content" width={1152} height={48} className="w-full max-w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
