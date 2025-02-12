import React from 'react'

const Box = () => {
    return (
        <div className='flex gap-7 justify-around'>
            <div className="group flex w-[1100px] flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="flex flex-col justify-center items-center rounded-t-xl overflow-hidden">
                    {/* Add an image */}
                    <img
                        className="w-full h-80 object-cover"
                        src="eco 1.jpg" // Replace with your image URL
                        alt="Card Image"
                    />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1  text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                        Bambooo
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        Water Bottle
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        It often stainless steel or glass, to ensure water safety and insulation, while the bamboo exterior provides durability, natural aesthetics, and sustainability.
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-green-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        Buy Now
                    </a>
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-blue-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        View Sample
                    </a>
                </div>
            </div>
            <div className="group flex w-[1100px] flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="h-80 flex flex-col justify-center items-center rounded-t-xl overflow-hidden">
                    {/* Add an image */}
                    <img
                        className="w-full h-full object-cover"
                        src="eco 2.jpg" // Replace with your image URL
                        alt="Card Image"
                    />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                        Jute Bag
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        Bag
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        A jute bag is considered eco-friendly because it is made from jute, a natural, biodegradable, and renewable plant fiber.
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-green-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        Buy Now
                    </a>
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-blue-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        View Sample
                    </a>
                </div>
            </div>
            <div className="group flex flex-col w-[1100px] h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="h-80 flex flex-col justify-center items-center rounded-t-xl overflow-hidden">
                    {/* Add an image */}
                    <img
                        className="w-full h-full object-cover"
                        src="eco3.jpg" // Replace with your image URL
                        alt="Card Image"
                    />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                        Earthen Pots
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                        Pots
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        Earthen pots are natural containers made from clay
                        and baked at high temperatures.
                        They are considered eco-friendly due to
                        their biodegradable nature.
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-green-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        Buy Now
                    </a>
                    <a
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-blue-500 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                    >
                        View Sample
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Box;
