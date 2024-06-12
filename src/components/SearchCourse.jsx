import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SearchCourse = () => {
  const [data,setData]=useState(
    {
      "title":""
    }
  )
  const [result,setResult]=useState([])
   
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  // search btn event
  const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/search",data).then(
      (response)=>{
        setResult(response.data)
      }

    ).catch(
      (error)=>{
        console.log(data)
      }
    )
    
  }
// delete btn event

const deleteCourse=(id)=>{
  let input={ "_id":id}
  axios.post("http://localhost:8080/delete",input).then(
    (response)=>{
      console.log(response.data)
      if(response.data. status =="success"){
        alert("successfully deleted")
      }
      else{
        alert("error")
      }
    }
  ).catch().finally()
  

}


  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Course Title</label>
                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-warning" onClick={readValue}>Search</button>
                    </div>
                </div>

                 
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
    {result.map(
      (value,index)=>{
        return <tr>
        
        <td>{value.title}</td>
        <td>{value.description}</td>
        <td>{value.date}</td>
        <td>{value.duration}</td>
        <td>{value.venue}</td>
        <td>{value.trainer}</td>
        <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
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

export default SearchCourse
