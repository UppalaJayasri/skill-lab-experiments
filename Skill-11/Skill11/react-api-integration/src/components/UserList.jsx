import React, { useState, useEffect } from "react";

function UserList() {

  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  const indianNames = [
    "Rohan Sharma",
    "Ananya Gupta",
    "Vikram Singh",
    "Meera Nair",
    "Karan Patel",
    "Neha Reddy",
    "Aditya Verma",
    "Pooja Sharma",
    "Arjun Mehta",
    "Divya Kapoor"
  ];

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{

      const updatedUsers = data.map((user,index)=>({
        ...user,
        name: indianNames[index]
      }));

      setUsers(updatedUsers);
      setLoading(false);

    })
    .catch(()=>{
      setError("Error fetching API");
      setLoading(false);
    });

  },[])

  if(loading) return <p>Loading...</p>;
  if(error) return <p>{error}</p>;

  return(

    <div>

      <h2>Users API</h2>

      {users.map(user=>(
        <div key={user.id}>

          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          <hr/>

        </div>
      ))}

    </div>

  )
}

export default UserList