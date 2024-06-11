import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,setData]=useState([])
    const  fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Course Title</th>
      <th scope="col">Course Description</th>
      <th scope="col">Course Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <td>{value.title}</td>
              <td>{value.description}</td>
              <td>{value.date}</td>
              <td>{value.duration}</td>
              <td>{value.venue}</td>
              <td>{value.trainer}</td>
            </tr>
        }
    )}
    
    
  </tbody>
</table>

                    </div>
                   
                </div>
            </div>
        </div>
  )
}

export default ViewCourse
