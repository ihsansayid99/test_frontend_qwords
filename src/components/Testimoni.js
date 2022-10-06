import React from 'react'

export default function Testimoni() {
    const testimoni = [
        {
            img: "https://www.whitehouse.gov/wp-content/uploads/2021/01/35_john_f_kennedy.jpg",
            name: "John F Kennedy",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: "https://pbs.twimg.com/profile_images/449699574207115264/FDzxuwMw_400x400.png",
            name: "Susilo B Yudhoyono",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            img: "https://akcdn.detik.net.id/visual/2022/02/25/presiden-rusia-vladimir-putin-3_169.jpeg?w=650",
            name: "Vladimir Putin",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]
  return (
    <>
        <section className='md:py-20 md:px-24 py-14 px-8' id='testimonials-section'>
            <div className='text-center'>
                <h2 className='font-bold md:text-4xl text-3xl mb-2'>Testimonials</h2>
                <p className='text-gray-500 font-medium md:text-sm text-xs'>Our Customer Reviews about us.</p>
            </div>
            <div className='md:py-10 md:px-24 px-2 py-8'>
                <div class="grid md:grid-cols-3 md:gap-9 grid-cols-1 gap-5 w-full">
                    {
                        testimoni?.map(item => {
                            return (
                                <div className='p-6 shadow-xl relative'>
                                    <span className='text-6xl text-orange-500'>"</span>
                                    <p className='text-gray-500 md:text-base text-sm leading-relaxed'>
                                        {item.content}
                                    </p>
                                    <div className='text-center w-full my-2'>
                                        <div className='w-24 h-24 mx-auto'>
                                            <img src={item.img} className='rounded-full w-full h-full border-4 border-white object-cover object-center' />
                                        </div>
                                        <div>
                                            <p className='text-white font-bold mt-2'>{item.name}</p>
                                        </div>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-full -z-10'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                            <path fill="#0099ff" fill-opacity="1" d="M0,192L60,170.7C120,149,240,107,360,74.7C480,43,600,21,720,32C840,43,960,85,1080,85.3C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}
