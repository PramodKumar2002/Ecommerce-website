'use client'
import { useFormik } from 'formik';
import React from 'react'
// import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const router = useRouter()

    const AddProduct = useFormik({
        initialValues: {
            brand: "",
            title: "",
            image: "",
            category: "",
            price: "",
            description: "",
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);

            axios.post('http://localhost:5000/product/add', values)
                .then((response) => {
                    console.log(response.status)
                    resetForm()
                    toast.success('Product added successfully')
                }).catch((err) => {
                    console.log(err)
                    toast.error('Failed to add product')
                });
        },
    });

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'preset2832');
        formData.append('cloud_name', 'dkk4yhp1v');
        const res = await axios.post('https://api.cloudinary.com/v1_1/dkk4yhp1v/image/upload', formData);
        AddProduct.setFieldValue('image', res.data.url);
        if (res.status === 200) {
            console.log(res.data);
            toast.success('Image uploaded sucessfully');
        }
    }

    return (
        <div >
            <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8 bg-green-200                                      ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 style={{ fontFamily: "initial" }} className="  underline fs-2 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Add Product
                    </h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" onSubmit={AddProduct.handleSubmit}>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="title"
                                className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    value={AddProduct.values.title}
                                    onChange={AddProduct.handleChange}
                                    name="title"
                                    type="text"
                                    autoComplete="title"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="discription"
                                className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    value={AddProduct.values.description}
                                    onChange={AddProduct.handleChange}
                                    name="description"
                                    type="text"
                                    autoComplete="description"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="description"
                                    className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Brand
                                </label>
                                <div className="text-sm">

                                </div>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    id="brand"
                                    value={AddProduct.values.brand}
                                    onChange={AddProduct.handleChange}
                                    type="text"
                                    autoComplete="description"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="price"
                                className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="price"
                                    value={AddProduct.values.price}
                                    onChange={AddProduct.handleChange}
                                    name="price"
                                    type="number"
                                    autoComplete="price"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="category"
                                className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Category
                            </label>
                            <div className="mt-2">
                                <input
                                    id="category"
                                    value={AddProduct.values.category}
                                    onChange={AddProduct.handleChange}
                                    name="category"
                                    type="text"
                                    autoComplete="category"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: "initial" }}
                                htmlFor="category"
                                className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                            >
                                Image URL
                            </label>
                            <div className="mt-2">
                                <input
                                    id="image"
                                    onChange={uploadImage}
                                    type="file"
                                    autoComplete="category"
                                    required=""
                                    className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <button
                            type="submit"
                            disabled={!AddProduct.values.image}
                            className="flex w-full disabled:opacity-50 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddProduct