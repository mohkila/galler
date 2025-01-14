'use client';
import React, { useEffect, useState } from 'react';
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Dcontent from './Dcontent';

// Function to map icon names to actual components
const iconMap = {
  PieChart: PieChart,
  Lock: Lock,
  FileText: FileText,
  Bell: Bell,
  Globe: Globe,
  Clipboard: Clipboard,
  CheckCircle: CheckCircle,
  Music: Music,
  Inbox: Inbox,
  Star: Star,
  Camera: Camera,
  User: User,
  Home: Home,
  Search: Search,
  MessageSquare: MessageSquare,
};

function Hero() {
  const [items, setItems] = useState([]);

  // Load the items data from the JSON file
  useEffect(() => {
    fetch('/items.json')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  console.log(items);

  return (
    <div className="container mt-10 bg-blue-950">
      <div className="p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {items.map(({ img, title, icon, bgcolor, href }, index) => {
          const IconComponent = iconMap[icon] || null;

          return (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  aria-label={`Navigate to ${title}`}
                  className={`${bgcolor || 'bg-gray-500'} flex flex-col items-center justify-center p-4 text-white cursor-pointer 
                    rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:opacity-90`}
                >
                  <div className="text-3xl">
                    {IconComponent ? <IconComponent /> : <div className="text-gray-400">Default Icon</div>}
                  </div>
                  {img && img !== "" && (
                    <Image src={img} alt={title} width={250} height={250} className="rounded-md mt-2" />
                  )}
                  <div className="mt-2 text-sm font-semibold">{title || 'Untitled'}</div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-black">{title}</DialogTitle>
                  <DialogContent className="w-full "><Dcontent item={items[index]} /></DialogContent>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
