import React from "react";
import './index.css';
import { useState } from "react";
import tempData from "../data.json"
 
const Home = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const [formData, setFormData] = useState({
        company: null,
        location: null,
        link: null,
        progress: null,
        date: null,
        status: null,
        details: null
      });

    var rows = tempData.map(function(application) {
        return (<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td className="px-5">{application.company}</td>
            <td className="px-5">{application.location}</td>
            <td className="px-5">{application.link}</td>
            <td className="px-5">{application.progress}</td>
            <td className="px-5">{application.date}</td>
            <td className="px-5">{application.status}</td>
            <td className="px-5">{application.details}</td>
            <td className="p-5">
                <button type='button' className=" bg-red-500 p-5 hover:bg-red-700 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="ivory" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </td>
        </tr>)
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior (page refresh)
        
        setFormData({
            // company: document.getElementById('company').value,
            // location: document.getElementById('location').value,
            // link: document.getElementById('link').value,
            // progress: document.getElementById('progress').value,
            // date: document.getElementById('date').value,
            // status: document.getElementById('status').value,
            // details: document.getElementById('details').value,
            company: 1,
            location: 2,
            link: 3,
            progress: 4,
            date: 5,
            status: 6,
            details: 7
        });

        console.log('Form submitted with data:', formData);
        console.log('Also', tempData)
        // You can send the form data to an API or perform other actions
    
        // Optionally, reset the form after submission
        setFormData({
            company: null,
            location: null,
            link: null,
            progress: null,
            date: null,
            status: null,
            details: null
        });
      };


    return (
        <div className="bg-gray-50 dark:bg-gray-900 h-screen">
            <div className="h-1/6 py-10">
                <h1 className="text-gray-900 dark:text-gray-100 font-black text-3xl text-center">Welcome, Chami Sagara</h1>
            </div>
            <div className="mx-10 max-h-96 overflow-y-auto overflow-x-auto shadow-md sm:rounded-lg">
                <form autoComplete="off" onSubmit={handleSubmit} method='post'>
                    <table className="min-w-10 text-sm max-w- text-left rtl:text-right text-gray-500 dark:text-gray-100">
                        <thead className="sticky top-0 text-xs text-gray-50 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="bg-slate-600">
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Company
                                        <a href="#">
                                            <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">Location(s)</th>
                                <th scope="col" className="px-6 py-3">Link</th>
                                <th scope="col" className="px-6 py-3">Progress</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Details</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="sticky top-10">
                            <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                                <td className="p-2"><input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" id="company" name="Company" placeholder="Google"/></td>
                                <td className="p-2"><input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="location" name="Location" placeholder="Mountain View, CA"/></td>
                                <td className="p-2"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="search" id="link" name="Link" placeholder="www.google.com/jobs/123"/></td>
                                <td className="p-2"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="progress" name="Progress" placeholder="Submitted"/></td>
                                <td className="p-2"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="date" name="Date" placeholder={formattedDate}/></td>
                                <td className="p-2"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="status" name="Status" placeholder="Interview"/></td>
                                <td className="p-2"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="details" name="Details" placeholder="N/A"/></td>
                                <td className="p-5">
                                    <button type='submit' className=" bg-green-500 p-5 hover:bg-green-700 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="ivory" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </form>
            </div>

        </div>
    );
};
 
export default Home;