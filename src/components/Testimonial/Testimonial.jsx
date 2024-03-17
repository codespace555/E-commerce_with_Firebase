import React from 'react'

function Testimonial({name}) {
  return (
 
       <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                                <p className="leading-relaxed dark:text-gray-300">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"  />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase dark:text-[#ff4162]">{name}</h2>
                                <p className="text-gray-500 dark:text-gray-200">Senior Product Designer</p>
                            </div>
                        </div>
 
  )
}

export default Testimonial
