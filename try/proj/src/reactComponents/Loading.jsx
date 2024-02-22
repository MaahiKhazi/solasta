import React from 'react'

const Loading = () => {
  return (
    <div
      className="flex flex-col items-center h-full gap-10 justify-center w-full"
      id="mainContent"
    >
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
        Getting Data from Google Gemini
      </h1>

      <div className="w-full max-w-3xl h-1 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-sky-500 bg-[length:200%] loading-animation"></div>
      <div className="flex flex-col gap-2">
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
          {" "}
          Do not refresh the page
        </p>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl">
          {" "}
          This usually take a while (around 30 seconds). But may take upto 2
          minutes.
        </p>
      </div>
    </div>
  );
}

export default Loading