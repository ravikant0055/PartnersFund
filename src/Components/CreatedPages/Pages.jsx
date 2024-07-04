import React from 'react'

const Pages = () => {

    return (
        <div className='h-screen flex'>
            <div className='bg-slate-200 w-[20%] h-full fixed border-r border-gray-300'>
                <div className='flex flex-col items-center'>
                    <div className='text-center mt-5'>
                        <h1 className='text-slate-900 py-4 text-4xl font-Lilita'>Partners Fund</h1>
                    </div>
                </div>
            </div>

            <div className='transition-transform duration-300 w-[80%] ml-[20%] relative transform scale-100 translate-x-0'>
                <div className="px-4 py-10 text-2xl font-bold text-slate-500">PAGES</div>
                <div className='m-4'>
                    List of Pages
                </div>
            </div>
        </div>
    )
}

export default Pages;