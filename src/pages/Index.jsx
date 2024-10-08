import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  const photos = [
    '/portfolio/image1.jpg',
    '/portfolio/image2.jpg',
    '/portfolio/image3.jpg',
    '/portfolio/image4.jpg',
    '/portfolio/image5.jpg',
    '/portfolio/image6.jpg',
  ];

  const [openImage, setOpenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (index) => {
    setOpenImage(photos[index]);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setOpenImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setOpenImage(photos[(currentImageIndex + 1) % photos.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setOpenImage(photos[(currentImageIndex - 1 + photos.length) % photos.length]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans">
      {/* Header with background image */}
      <header className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: "url('/portfolio/header.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative z-10 px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 font-serif">Sachin Joshi</h1>
          <p className="text-xl sm:text-2xl md:text-4xl text-gray-200 font-light">Professional Model</p>
        </div>
      </header>

      {/* About Section with Parallax */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('/portfolio/about-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 sm:mb-8 text-center font-serif">About Me</h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto leading-relaxed">
            I'm Sachin Joshi, a passionate and versatile model with over 5 years of experience in fashion, commercial, and editorial work. My goal is to bring your vision to life through captivating imagery. With a keen eye for detail and a natural ability to connect with the camera, I strive to create unforgettable moments in every shoot.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center font-serif">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openImageModal(index)}>
              <img src={photo} alt={`Model photo ${index + 1}`} className="w-full h-64 sm:h-72 md:h-80 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="bg-gray-800 text-white py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 sm:mb-12 text-center font-serif">Let's Connect</h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Interested in working together? Get in touch with me through any of the following channels:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12">
            <a href="#" className="flex items-center text-xl sm:text-2xl hover:text-gray-300 transition-colors duration-300">
              <Instagram className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
              Instagram
            </a>
            <a href="#" className="flex items-center text-xl sm:text-2xl hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
              LinkedIn
            </a>
            <a href="mailto:sachin@example.com" className="flex items-center text-xl sm:text-2xl hover:text-gray-300 transition-colors duration-300">
              <Mail className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 sm:py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg sm:text-xl md:text-2xl">&copy; 2023 Sachin Joshi. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      <Dialog open={openImage !== null} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-4xl w-full bg-black p-0 overflow-hidden">
          <div className="relative">
            <img src={openImage} alt="Enlarged portfolio image" className="w-full h-auto" />
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
