import React from 'react'
import Card from './Card'
import { useRef } from 'react';

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            description: "This is the background color of the card dislayed.",
            fileSize: "0.9Mb",
            close: true,
            tagDetails: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "bg-green-600"
            },
        },
        {
            description: "This is the background color of the card dislayed.",
            fileSize: "0.9Mb",
            close: true,
            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "bg-sky-600"
            },
        },
        {
            description: "This is the background color of the card dislayed.",
            fileSize: "0.9Mb",
            close: true,
            tagDetails: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "bg-yellow-600"
            },
        }
    ];
    return (
        <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground