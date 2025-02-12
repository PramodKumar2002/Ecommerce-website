'use client'
import Card from '@/components/Card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ListProduct = () => {

  const [product, setproduct] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchproduct = async () => {
    try {
      const res = await axios.get('http://localhost:5000/product/getall');
      if (res.status === 200) {
        const data = [...res.data];
        console.log(data);
        setproduct(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>
            <a
              href="#"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-green-300 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Show more
            </a>
          </div>
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* product - start */}
            {product.map((p) => {
              return <Card key={p._id} id={p._id} brand={p.brand} name={p.title} src={p.image} price={p.price}></Card>
            })}
            {/* product - end */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListProduct;