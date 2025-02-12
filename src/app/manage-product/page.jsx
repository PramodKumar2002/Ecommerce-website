'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IconTrash, IconPencil } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Manageproduct = () => {


    const [productList, setproductList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchproducts = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/product/getall')
        console.log(res.data);
        setproductList(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchproducts();
    }, []);
    const deleteproduct = async (id) => {
        if (!confirm('Are you sure want to delete this product?')) return;
        const res = await axios.delete(`http://localhost:5000/product/delete/${id}`);
        if (res.status === 200) {
            fetchproducts();
            toast.success('product delete successfully');
        }
        else {
            toast.error('Failed to delete product');
        }
    }


    return (
        <div className='h-screen bg-gray-200 pt-10'>
            <h1 className='text-center font-bold text-3xl'>Manage products</h1>
            <div className='container mx-auto'>
                {
                    loading ? <p className='text-center text-gray-500 text-2xl font-bold'>
                        Loading... Please Wait
                    </p> : (
                        <table className='w-full my-10'>
                            <thead className='border border-slate-800 text-white bg-slate-800'>
                                <tr >
                                    <th className='p-2'>ID</th>
                                    <th className='p-2'>Title</th>
                                    <th className='p-2'>brand</th>
                                    <th className='p-2'>Description</th>
                                    <th className='p-2'>price</th>
                                    <th className='p-2'>category</th>
                                    <th className='p-2'>image</th>
                                    <th className='p-2'>Registered At</th>
                                    <th className='p-2' colSpan={2}></th>

                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {
                                    productList.map((product) => {
                                        return <tr key={product._id} className=''>
                                            <td className='p-2 border border-gray-300'>{product._id}</td>
                                            <td className='p-2 border border-gray-300'>{product.title}</td>
                                            <td className='p-2 border border-gray-300'>{product.brand}</td>
                                            <td className='p-2 border border-gray-300'>{product.description}</td>
                                            <td className='p-2 border border-gray-300'>{product.price}</td>
                                            <td className='p-2 border border-gray-300'>{product.category}</td>
                                            <td className='p-2 border border-gray-300'>{product.image}</td>




                                            <td className='p-2 border border-gray-300'>{product.createdAt}</td>
                                            <td>
                                                <button onClick={() => { deleteproduct(product._id) }} className='bg-red-500 text-white px-2 py-1 rounded-full'>
                                                    <IconTrash />
                                                </button>
                                            </td>
                                            <td className='p-2 border border-gray-300'>
                                                <Link  href={'/updateproduct/'+ product._id}   className='bg-blue-500 text-white px-2 block w-fit py-1 rounded-full'>
                                                    <IconPencil />
                                                </Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>

        </div>
    )
}

export default Manageproduct;