'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const Card = ({ id, src, price, name, brand }) => {
    const router = useRouter();
    return (
        <div>
            <Link href={'/productDetail/' + id}
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
            >
                <img
                    src={src}
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
            </Link>
            <div>
                <p
                    className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                    {brand}
                </p>
                <p
                    className="mb-1 text-xl"
                >
                    {name}
                </p>
                <div className="flex items-end gap-2">
                    <span className="font-bold text-gray-800 lg:text-lg">₹{price}</span>
                </div>
            </div>
        </div>
    )
}

export default Card