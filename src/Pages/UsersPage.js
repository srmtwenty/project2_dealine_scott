import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function UsersPage() {

    const [users, setUsers] = useState([]);

    const loadUsers = ()=>{
        axios.get('http://localhost:8082/users')
            .then(res => {
                setUsers(res.data); 
                console.log(users)
            })
            .catch(err => {
                console.log(err)
            });
        };

    useEffect(() => {

        loadUsers();
       
    }, [])

    function Delete(id){
        axios.delete(`http://localhost:8082/users/${id}`)
            .then(res => {
                loadUsers();
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }




    return (
    <div className='w-full h-full flex-col px-10 py-8'>

        

        <div className="w-full h-full flex-col flex min-h-[50vh] justify-center items-center ">

        <h1  className='text-black text-3xl font-semibold mt-16'> Users page </h1>

        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
               ID
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
              First Name
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Last Name
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Email
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Username
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Password
              </th>
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Role
              </th> 
              <th scope="col" className="text-lg font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead >
         {console.log(users)} 
          <tbody>
          {users.map((data, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                {data.userId}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.firstName}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.lastName}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.email}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.username}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.password}
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data.role}
              </td>
              <td className=" flex space-x-4  whitespace-nowrap justify-center items-center mt-1">
                <Link to={`/users/${data.userId}`} className='px-6 py-2 text-white bg-black rounded-lg font-semibold'>View</Link>
                <Link to={`/users/update/${data.userId}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg font-semibold'>Edit </Link>
                <button onClick={()=>Delete(
                    data.userId
                )} className='px-6 py-2 text-white bg-red-600 rounded-lg font-semibold'>Delete</button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
         
      </div>

     
    </div>
    )}

export default UsersPage