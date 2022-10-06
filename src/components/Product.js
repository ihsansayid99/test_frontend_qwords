import React from 'react'

export default function Product() {
    const products = [
        {
            img: "https://img1.cgtrader.com/items/909173/0ef26b5315/large/wrech-3d-model-low-poly-max-obj-ma-mb.jpg",
            title: "Wrench Inggris 6.6",
            content: "Model available for download in Autodesk FBX format. Visit CGTrader and browse more than 1 million 3D models, including 3D print and real-time assets"
        },
        {
            img: "http://static.bmdstatic.com/pk/product/large/5d4252558a871.jpg",
            title: "Wrench Inggris 7.6",
            content: "Model available for download in Autodesk FBX format. Visit CGTrader and browse more than 1 million 3D models, including 3D print and real-time assets"
        },
        {
            img: "http://mobileimages.lowes.com/productimages/170923a2-b5bc-49f9-b936-936ea1f3b65a/09219040.jpg",
            title: "Wrench Inggris 8.6",
            content: "Model available for download in Autodesk FBX format. Visit CGTrader and browse more than 1 million 3D models, including 3D print and real-time assets"
        },
        {
            img: "http://mobileimages.lowes.com/productimages/d18286dc-3171-4be3-b9ad-b5e33d0ee797/09233124.jpg",
            title: "Wrench Inggris 9.6",
            content: "Model available for download in Autodesk FBX format. Visit CGTrader and browse more than 1 million 3D models, including 3D print and real-time assets"
        },
    ]
  return (
    <>
        <section className='md:py-6 md:px-24 py-4 px-10' id='product-section'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='md:text-4xl text-2xl font-bold'>Our Latest Product</h2>
                    <p className='md:text-base text-sm font-normal text-gray-400'>Discover the latest from our products.</p>
                </div>
                <div className='hidden md:block'>
                    <button className='rounded-3xl py-2 px-6 text-sm text-gray-400 hover:text-gray-600 border-2 font-bold'>See All</button>
                </div>
            </div>
            <div className='py-10 flex items-center'>
                <div class="grid md:grid-cols-4 md:gap-9 grid-cols-1 gap-5 w-full">
                    {
                        products?.map(item => {
                            return (
                                <div className='border-2 p-4 rounded-xl'>
                                    <div className='h-60 w-full'>
                                        <img src={item.img} className='h-full w-full object-cover object-center' />
                                    </div>
                                    <div className='py-5'>
                                        <h6 className='text-xl font-semibold'>{item.title}</h6>
                                        <p className='my-2 leading-relaxed'>{item.content}</p>
                                    </div>
                                    <div className='py-2'>
                                        <button className='rounded-md bg-orange-400 py-3 text-white text-base font-medium w-full'>Contact Whatsapp</button>
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
