import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import axios from "axios"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link, Navigate} from 'react-router-dom';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  
  // height:800,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  
  
  
  // height:400,
 
  p: 4,
};
export default function Navbar() {
  // const Navigate = useNavigate();


  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const[state,setState]=useState([])
 

  const Searchmovie=(e)=>{
       axios.get(`https://www.omdbapi.com/?s=${e.target.value}&apikey=70881a54`).then(response=>{
      console.log("response", response.data.Search);
      setState(response.data.Search);

    })
        
  }
  const Genre=(name)=>{
    console.log(name);
    Navigate(`/Genre/${name}`)
  }
  return (
    
    <div className="fadey">
       <img  className='movielogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt=''/>
       <img className='movieavatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt=''/>
       <div>
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
        <title>Smooth Expanding Search Bar</title>
        <div className="search-box">
          <input className="search-text"  type="text" placeholder="Search for a movie,genre,etc." onChange={Searchmovie} />
          <a href="#" className="search-btn" onClick={handleOpen}>
            <i className="fas fa-search" />
          </a>
        </div> 
        
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
    Genre
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item"  href="/Genre/action">Action</a>
    <a class="dropdown-item"  href="/Genre/comedy">Comedy</a>
    <a class="dropdown-item"  href="/Genre/original">Original</a>
    <a class="dropdown-item"  href="/Genre/horror">Horror</a>
    <a class="dropdown-item"  href="/Genre/crime">Crime</a>
    <a class="dropdown-item"  href="/Genre/mystery">Mystery</a>
    <a class="dropdown-item"  href="/Genre/adventure">Adventure</a>
    <a class="dropdown-item"  href="/Genre/history">History</a>
    <a class="dropdown-item"  href="/Genre/war">War</a>
    <a class="dropdown-item"  href="/Genre/drama">Drama</a>
    <a class="dropdown-item"  href="/Genre/fiction">Fiction</a>
    <a class="dropdown-item"  href="/Genre/family">Family</a>
    <a class="dropdown-item"  href="/Genre/thriller">Thriller</a>
    <a class="dropdown-item"  href="/Genre/animation">Animation</a>



    <div class="dropdown-divider"></div>
    {/* <a class="dropdown-item" href="#">Separated link</a> */}
  </div>
</div>
        
      </div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
<div class="row" style={{overflowY:'scroll',height:"80vh"}}>
          {state ? 
        state.map((movie)=>( 
          <div class="col-lg-4">
          <div class="card " style={{width: "18rem"}}>
 
  <img src={movie.Poster} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{movie.Title}</h5>
    <p class="card-text">{movie.Type}</p>
    <p class="card-text">{movie.Year}</p>

   <a href={`/Id/${movie.imdbID}`} class="btn btn-primary">Go somewhere</a>
  </div>
   
</div>
</div>
 ))
 :
 ""  
   } 

        
</div>


          
           </Typography>
        </Box> 
       </Modal>   
      
      
    </div>
</div>

  )
}
