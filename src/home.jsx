import React from 'react'

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-serif text-center bg-yellow-500'>Welcome to TechNova Solutions </h1>
      <h4 className='text-lg font-sans'>We Build Digital Experiences That Grow Your Business.</h4>
      <h3 className='text-2xl font-serif text-indigo-800'>Description:</h3>
      <p className='text-base font-sans'>We help businesses build modern websites and digital solutions that make their work easier.<br /> Our goal is to create simple, responsive, and user-friendly experiences for everyone.</p>
      <video width="300" src="video1.mp4" controls></video>
    </div>
  )
}
