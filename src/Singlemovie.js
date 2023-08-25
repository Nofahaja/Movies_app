import React, { useEffect,useState } from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';


export default function Singlemovie() {

    const[movie,setMovie]=useState([])
    const {id}=useParams()
    console.log(id);
    console.log(movie);

  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=70881a54`).then(response=>{
      console.log("response=>",response.data);
      setMovie(response.data)
    })

  },[])




  return (
    <div>
      <Navbar/>
      <Home/>

    </div>
  )
}
