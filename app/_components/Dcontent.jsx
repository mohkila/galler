import React from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  PieChart,
  Lock,
  FileText,
  Bell,
  Globe,
  Clipboard,
  CheckCircle,
  Music,
  Inbox,
  Star,
  Camera,
  User,
  Home,
  Search,
} from 'lucide-react';

// Mapping the icon names to their respective components
const iconMap = {
  MessageSquare,
  PieChart,
  Lock,
  FileText,
  Bell,
  Globe,
  Clipboard,
  CheckCircle,
  Music,
  Inbox,
  Star,
  Camera,
  User,
  Home,
  Search,
};

function Dcontent({ item }) {
  const IconComponent = iconMap[item.icon];

  // Function to handle download click
  const downloadImage = (imageUrl) => {
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = 'downloaded_image';
    anchor.click();
  };

  return (
    <div className='text-black w-full max-w-[900px] bg-white rounded-lg  '>
        <div className='bg-green-700 p-4 rounded-lg  flex justify-between items-center text-white text-4xl font-bold'>

      <h1>{item.title}</h1>
      {IconComponent && <IconComponent />}
        </div>
      <div className='flex gap-4 items-center'>
      {item.img && <Image src={item.img} alt={item.title} width={500} height={500} />}

        <div className='flex flex-col gap-10 text-black mt-10'>

      <p className='border-b-2 border-green-800'>{item.description}description description description description</p>
      <p className='border-b-2 border-green-800'>{item.content2} content2 content2 content2 content2 content2  </p>
      <p className='border-b-2 border-green-800'>SAR {item?.price}</p>
      <div
        onClick={() => downloadImage(item.img)}
        className='bg-red-500 inline-block p-5 rounded-lg text-white font-bold cursor-pointer hover:bg-red-600 transition-colors duration-300'>
        <h2>Download the Gallery</h2>
      </div>
      </div>
      </div>
    
    </div>
  );
}

export default Dcontent;
