import React from 'react'

function NoRoutes() {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
  <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
    <div className="lg:flex lg:items-center lg:space-x-10">
      <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="question-mark"
        className="h-[300px] w-auto"
      />
      <div>
        <p className="mt-6 text-sm font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&#x27;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&#x27;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default NoRoutes
