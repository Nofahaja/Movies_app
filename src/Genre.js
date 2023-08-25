import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from "axios"
import Home from './Home';
import Navbar from './Navbar';
import "./Genre.css"



export default function Genre() {
    const [Genre,setGenre]=useState([])
    const API_KEY='6cdf1bc39c14d06f4b51e70d622928f4';
    const {value}=useParams()
    
    useEffect(()=>{
      if(value==="action")
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then (response=>{
         console.log("response===>",response.data.results); 
         setGenre(response.data.results);
         })
      } 
      else if(value==="comedy") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);  
      })
      } 
      else if(value==="original") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results); 
      })
      } else if(value==="horror") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results); 
      })
      } else if(value==="crime") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`).then (response=>{
          console.log("response===>",response.data.results); 
         setGenre(response.data.results);
      })
      } else if(value==="mystery") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`).then (response=>{
          console.log("response===>",response.data.results); 
         setGenre(response.data.results);
      })
      } else if(value==="adventure") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results); 
      })
      } else if(value==="history") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results); 
      })
      } else if(value==="war") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);  
      })
      } else if(value==="drama") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);   
      })
      } else if(value==="fiction") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);  
      })
      } else if(value==="family") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);  
      })
      } else if(value==="thriller") 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results);  
      })
      }
       else 
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`).then (response=>{
          console.log("response===>",response.data.results); 
          setGenre(response.data.results); 
      })
      } 

       },[])
console.log(Genre)
  return (
    <div>
      <Navbar/>
      <div className='Genrediv'>
        {Genre.map((act)=>(
      <div className="scrolling">
       
       <div className='imagesscroll'>
        <img className='scrollbac' src={`https://image.tmdb.org/t/p/original${act.backdrop_path}`} alt=''/>
        <div className="cls">
        <p className='scrolltit'><span className='overspan'>Title: </span> {act.original_title}</p> 
         {/* <p className='scrolllan'>{act.original_language}</p>    */}
         <p className='scrolldat'><span className='overspan'> Release Date: </span> {act.release_date}</p> 
         <p className='scrollpop'><span className='overspan'> Popularity:</span>  {act.popularity}</p> 
        <p className='scrollover'> <span className='overspan'>Overview:</span> {act.overview}</p>   
         </div>
        </div>
      </div>
         ))}
    </div>
 
    </div>
  )
}
