import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-gray-700 bg-[#0d1117]">
      <div className="text-center text-gray-400">
        <p className="text-sm">
          Created with ❤️ by <a href="https://github.com/durlavdeo" target='_blank' className='text-blue-500'>Durlav</a> • © {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer; 