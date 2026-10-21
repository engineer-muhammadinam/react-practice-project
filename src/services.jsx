import React from 'react'

export default function Services() {
  return (
    <div>
      <h1 className='text-4xl font-serif text-center bg-indigo-600'>Our Services</h1>
      <h4 className='text-2xl font-serif text-indigo-800'>Description:</h4>
      <p className='text-base font-sans'>We offer a range of digital services to help your business succeed in today's online world.</p>
      <h5 className='text-xl font-serif'>1- Web Design & Development</h5>
      <p className='text-base font-sans'>We create fast, responsive, and professional websites for businesses and individuals.</p>
      <img width= "300"src="image1.jpg" alt="Web Design & Development" />
        <h5 className='text-xl font-serif'>2- Mobile App Development</h5>
        <p className='text-base font-sans'>We build user-friendly mobile applications for iOS and Android platforms.</p>
        <img width= "300"src="image2.jpg" alt="Mobile App Development" />
        <h5 className='text-xl font-serif'>3- Digital Marketing</h5>
        <p className='text-base font-sans'>We help businesses grow their online presence through effective digital marketing strategies.</p>
        <img width= "300"src="image3.jpg" alt="Digital Marketing" />
    </div>
  )
}
