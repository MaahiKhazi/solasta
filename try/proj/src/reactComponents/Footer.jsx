import React from 'react'
import Logo from "./images/react.svg"
const Footer = () => {
  return (
    <footer className="h-16 flex justify-center items-center gap-6">
      <p>© 2024 AlphaTechy</p>
      <div className="hidden sm:flex text-sm items-center  gap-2 bg-black border border-neutral-700 text-white px-4 py-2 rounded-lg">
        Built with ReactJs{" "}
        <img
          className="invert h-3 w-auto"
          src={Logo}
          alt="ReactJS Logo"
          width={72}
          height={16}
        />
      </div>
    </footer>
  );
}

export default Footer