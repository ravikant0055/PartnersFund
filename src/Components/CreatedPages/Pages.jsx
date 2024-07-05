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

            <div className='w-[80%] ml-[20%]'>
                <div className="px-4 py-10 text-2xl font-bold text-slate-500">PAGES</div>
                <div className='flex flex-wrap justify-center gap-6'>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>A</h1>
                    </div>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>B</h1>
                    </div>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>C</h1>
                    </div>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>D</h1>
                    </div>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>E</h1>
                    </div>
                    <div className='flex flex-col py-16  w-[300px] items-center bg-slate-100 rounded-lg shadow-lg'>
                        <h1 className='text-slate-600 mt-1'>F</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages;