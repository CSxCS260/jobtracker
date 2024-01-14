import {Fragment, React} from "react";
import './index.css';
import { useEffect, useState } from "react";
import tempData from "../data.json"
import { Menu, Transition} from '@headlessui/react'
import axios from 'axios'
// Icons from Heroicons
 
const Home = () => {
//     const currentDate = new Date();
//     const formattedDate = currentDate.getFullYear() + '-' + currentDate.getMonth() + 1 + '-' + currentDate.getDate();
    // const FileSystem = require("fs");
    const _ = require("lodash");
    const [apiData, setApiData] = useState(null);
    const [rows, setRows] = useState(null);
    const [formData, setFormData] = useState(null);
    var largestID = 0;

    const greetings = ["Greetings", "Hi", "Hi there", "Howdy", "Hiya", "G'day", "Welcome", "Hello there", "Hey", "Hope your day's going well"];
    const randomGreeting = greetings[Date.now()%greetings.length]


    useEffect(() => {
        // Make a GET request to the Express API
        axios.get('http://localhost:8080/api/data')
          .then(response => {
            setApiData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data from API:', error);
          });
      }, []);

    
    useEffect(() => {
        // Make a GET request to the Express API
        if (apiData != null){
            setRows(apiData.map(function(application) {
                console.log(application.id);
                return (<tr className="flex flex-col md:flex-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-t dark:border-gray-700 py-5">
                    <td className="px-5 py-5 w-[10%]">{application.company}</td>
                    <td className="px-5 py-5 w-[10%]">{application.location}</td>
                    <td className="px-5 py-5 w-[20%] break-words"><a>{application.link}</a></td>
                    <td className="px-5 py-5 w-[10%]">{application.progress}</td>
                    <td className="px-5 py-5 w-[10%]">{application.date}</td>
                    <td className="px-5 py-5 w-[10%]">{application.status}</td>
                    <td className="px-5 py-5 w-[25%]">{application.details}</td>
                    <td className="p-5 w-[5%]">
                        <Menu as="div" >
                            <div>
                                <Menu.Button className="block m-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                >
                                <Menu.Items className="absolute mt-2 w-24 origin-top-left lg:right-0 divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-500 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            className={`${
                                            active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Edit
                                        </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <button
                                            className={`${
                                                active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            Delete
                                        </button>
                                        )}
                                    </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </td>
                </tr>)
            }))
        }
      }, [apiData]);

    // var rows = tempData.map(function(application) {
    //     return (<tr className="flex flex-col md:flex-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-t dark:border-gray-700 py-5">
    //         <td className="px-5 py-5 w-[10%]">{application.company}</td>
    //         <td className="px-5 py-5 w-[10%]">{application.location}</td>
    //         <td className="px-5 py-5 w-[20%] break-words"><a>{application.link}</a></td>
    //         <td className="px-5 py-5 w-[10%]">{application.progress}</td>
    //         <td className="px-5 py-5 w-[10%]">{application.date}</td>
    //         <td className="px-5 py-5 w-[10%]">{application.status}</td>
    //         <td className="px-5 py-5 w-[25%]">{application.details}</td>
    //         <td className="p-5 w-[5%]">
    //             <Menu as="div" >
    //                 <div>
    //                     <Menu.Button className="block m-auto">
    //                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    //                             <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
    //                         </svg>
    //                     </Menu.Button>
    //                 </div>
    //                 <Transition
    //                     as={Fragment}
    //                     enter="transition ease-out duration-100"
    //                     enterFrom="transform opacity-0 scale-95"
    //                     enterTo="transform opacity-100 scale-100"
    //                     leave="transition ease-in duration-75"
    //                     leaveFrom="transform opacity-100 scale-100"
    //                     leaveTo="transform opacity-0 scale-95"
    //                     >
    //                     <Menu.Items className="absolute mt-2 w-24 origin-top-left lg:right-0 divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-500 shadow-lg ring-1 ring-black/5 focus:outline-none">
    //                         <div className="px-1 py-1 ">
    //                         <Menu.Item>
    //                             {({ active }) => (
    //                             <button
    //                                 className={`${
    //                                 active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
    //                                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //                             >
    //                                 Edit
    //                             </button>
    //                             )}
    //                         </Menu.Item>
    //                         <Menu.Item>
    //                             {({ active }) => (
    //                             <button
    //                                 className={`${
    //                                     active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
    //                                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //                             >
    //                                 Delete
    //                             </button>
    //                             )}
    //                         </Menu.Item>
    //                         </div>
    //                     </Menu.Items>
    //                 </Transition>
    //             </Menu>
    //         </td>
    //     </tr>)
    // });

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior (page refresh)
        const postData = {
            id: largestID,
            company: document.getElementById('company').value,
            location: document.getElementById('location').value,
            link: document.getElementById('link').value,
            progress: document.getElementById('progress').value,
            date: document.getElementById('date').value,
            status: document.getElementById('status').value,
            details: document.getElementById('details').value
        }
        largestID++;
        try {
            console.log('sending ', postData)
            const response = await axios.post('http://localhost:8080/api/data', postData);
            console.log('POST request successful:', response.data);
            // Handle the response as needed
          } catch (error) {
            console.error('Error making POST request:', error);
            // Handle the error as needed
          }
      };


      

    return (
        <div className="bg-blue-500 dark:bg-gray-900 h-fit ">
            <div className="h-1/6 py-10">
                <h1 className="text-gray-100 dark:text-gray-100 font-black text-3xl text-center">{randomGreeting}, Chami!</h1>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg mb-10 mx-10">
                <div className="z-10 bg-white dark:bg-gray-800 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required=""/>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <a href="#new">
                            <button type="button" className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>
                                Add entry
                            </button>
                        </a>
                        <div className="flex items-center space-x-3 w-full md:w-auto">
                            <Menu as="div" >
                                <div>
                                    <Menu.Button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 " fill="currentColor" className="h-4 w-4 mr-2">
                                            <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                        </svg>
                                        Actions
                                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="z-10 absolute right-50 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-500 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Mass edit
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Delete all
                                            </button>
                                            )}
                                        </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <Menu as="div" >
                                <div>
                                    <Menu.Button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                                            <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                                        </svg>
                                        Filter
                                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    >
                                    <Menu.Items className="z-10 absolute mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-slate-500 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Mass edit
                                            </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-blue-700 dark:bg-slate-600 text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >
                                                Delete all
                                            </button>
                                            )}
                                        </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className="">
                    <form autoComplete="off" onSubmit={handleSubmit} method='post'>
                        <table className="w-full table-fixed border-collapse overflow-hidden text-sm text-left rtl:text-right text-gray-500 dark:text-gray-100">
                            <thead className="w-full z-10 rounded-lg text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="flex flex-col md:flex-row bg-slate-50 dark:bg-slate-600">
                                    <th scope="col" className="p-4 w-[10%]">
                                        <div className="flex items-center">
                                            Company
                                            <a href="#">
                                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="p-4 w-[10%]">Location(s)</th>
                                    <th scope="col" className="p-4  w-[20%]">Link</th>
                                    <th scope="col" className="p-4  w-[10%]">Progress</th>
                                    <th scope="col" className="p-4 w-[10%]">
                                        <div className="flex items-center">
                                            Date
                                            <a href="#">
                                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="p-4 w-[10%]">
                                        <div className="flex items-center">
                                            Status
                                            <a href="#">
                                                <svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </th>
                                    <th scope="col" className="p-4 w-[25%]">Details</th>
                                    <th scope="col" className="p-3 w-[5%]"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                                <tr id='new' className="flex flex-col md:flex-row odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-t dark:border-gray-700 py-5">
                                    <td className="p-2 w-[10%]"><input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" id="company" name="Company" placeholder="e.g. &quot;Google&quot;"/></td>
                                    <td className="p-2 w-[10%]"><input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" id="location" name="Location" placeholder="e.g. &quot;Mountain View, CA&quot;"/></td>
                                    <td className="p-2 w-[20%]"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="link" name="Link" placeholder="e.g. &quot;www.google.com/jobs/123&quot;"/></td>
                                    <td className="p-2 w-[10%]"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="progress" name="Progress" placeholder="e.g. &quot;Submitted&quot;"/></td>
                                    <td className="p-2 w-[10%]"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="date" id="date" name="Date"/></td>
                                    <td className="p-2 w-[10%]"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="status" name="Status" placeholder="e.g. &quot;Interview&quot;"/></td>
                                    <td className="p-2 w-[25%]"><input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" id="details" name="Details" placeholder="e.g. &quot;Mobile development&quot;"/></td>
                                    <td className="p-5 w-[5%]">
                                        <button className="block m-auto" type='submit'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};
 
export default Home;