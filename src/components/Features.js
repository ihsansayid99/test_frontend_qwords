import React from 'react'
import FeaturesImage from '../asset/img/features-image.jpeg';

export default function Features() {
  return (
    <>
        <section className='md:py-6 md:px-24 px-10 py-4' id='features-section'>
            <div className='flex md:flex-row flex-col items-start justify-center'>
            <div className='mr-4'>
                <img src={FeaturesImage} className="rounded-2xl" />
            </div>
            <div className='md:ml-14 ml-2 md:mt-0 mt-4'>
                <p className='text-lg text-orange-500 font-normal mb-4'>You Deserve Better Tools</p>
                <h2 className='text-4xl font-bold w-10/12 text-gray-900 leading-tight'>Feedback you will get from us</h2>
                <div className='mt-4'>
                <ul>
                    <li className='my-3'><span className='rounded-full bg-orange-500 text-sm mr-2'>&#10004;</span>Lorem Ipsum Dolor Sit Amet</li>
                    <li className='my-3'><span className='rounded-full bg-orange-500 text-sm mr-2'>&#10004;</span>Lorem Ipsum Dolor Sit Amet</li>
                    <li className='my-3'><span className='rounded-full bg-orange-500 text-sm mr-2'>&#10004;</span>Lorem Ipsum Dolor Sit Amet</li>
                    <li className='my-3'><span className='rounded-full bg-orange-500 text-sm mr-2'>&#10004;</span>Lorem Ipsum Dolor Sit Amet</li>
                    <li className='my-3'><span className='rounded-full bg-orange-500 text-sm mr-2'>&#10004;</span>Lorem Ipsum Dolor Sit Amet</li>
                </ul>
                </div>
                <div className='mt-8'>
                <button className='px-8 py-3 text-white bg-gray-900 rounded-3xl text-sm font-bold'>JOIN NOW</button>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}
