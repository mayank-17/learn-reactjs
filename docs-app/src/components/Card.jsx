import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileHover={{ scale: 1.1, rotate: 0 }} dragElastic={0.1} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden flex-shrink-0'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>
            {data.description}
        </p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose size=".7em" color='#fff'/> : <LuDownload size=".7em" color='#fff'/> }
                </span>
            </div>
            {
                data.tagDetails.isOpen && (
                    <div className={`tag w-full py-4 ${data.tagDetails.tagColor} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tagDetails.tagTitle}</h3>
                    </div>
                )
            }
        </div>
    </motion.div>
  )
}

export default Card