'use client';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IconTrash, IconPencil } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const ManageUser = () => {


    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data);
        setUserList(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    const deleteUser = async (id) => {
        if (!confirm('Are you sure want to delete this user?')) return;
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        if (res.status === 200) {
            fetchUsers();
            toast.success('User delete successfully');
        }
        else {
            toast.error('Failed to delete user');
        }
    }


    return (
        <div className='h-screen bg-gray-200 pt-10'>
            <h1 className='text-center font-bold text-3xl'>Manage Users</h1>
            <div className='container mx-auto'>
                {
                    loading ? <p className='text-center text-gray-500 text-2xl font-bold'>
                        Loading... Please Wait
                    </p> : (
                        <table className='w-full my-10'>
                            <thead className='border border-slate-800 text-white bg-slate-800'>
                                <tr >
                                    <th className='p-2'>ID</th>
                                    <th className='p-2'>Name</th>
                                    <th className='p-2'>Email</th>
                                    <th className='p-2'>Registered At</th>
                                    <th className='p-2' colSpan={2}></th>

                                </tr>
                            </thead>
                            <tbody className='bg-gray-100'>
                                {
                                    userList.map((user) => {
                                        return <tr key={user._id} className=''>
                                            <td className='p-2 border border-gray-300'>{user._id}</td>
                                            <td className='p-2 border border-gray-300'>{user.name}</td>
                                            <td className='p-2 border border-gray-300'>{user.email}</td>
                                            <td className='p-2 border border-gray-300'>{user.createdAt}</td>
                                            <td>
                                                <button onClick={() => { deleteUser(user._id) }} className='bg-red-500 text-white px-2 py-1 rounded-full'>
                                                    <IconTrash />
                                                </button>
                                            </td>
                                            <td className='p-2 border border-gray-300'>
                                                <Link  href={'/updateuser/'+ user._id}   className='bg-blue-500 text-white px-2 block w-fit py-1 rounded-full'>
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

export default ManageUser;