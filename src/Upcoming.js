import React,{useState,useEffect} from 'react'
import "./Upcoming.css"
import axios from 'axios'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1300,
  bgcolor: '#111',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Upcoming() {

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Upcoming,setUpcoming]=useState([])
    const[state,setState]=useState({
      single:[],
      video:""
    })
    const {id}=useParams()
    console.log(state);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US&page=1`).then (response=>{
     console.log("response===>",response.data.results)
     setUpcoming(response.data.results)
    })
  },[])
console.log(Upcoming);

const singleview=(id)=>{
  console.log(id)
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US`).then(response=>{
   const single = response.data
   axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US`).then (response=>{
    console.log("response====>",response);
  const video=response.data
  setState({...state,
    single,
    video})
    })
  })

console.log(state);
}
  return (
    <div>
                   <h1 className='scrollh1'>Upcoming Movies</h1> 

    <div className="scroll">
      <div className='tro'>
      {Upcoming.map((Up)=>(
        <>
       <div className='imagesscrolling'>
        <img className='scrollimg'onClick={()=>{handleOpen();singleview(Up.id)}} src={`https://image.tmdb.org/t/p/original${Up.poster_path}`} alt=''/>
         </div>
         </>
        ))}
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

          <div class="row" style={{overflowY:'scroll',height:"60vh"}}>
          <div className='Genrediv'>
        
      <div className="scrolling">
       
       <div className='imagesscroll'>
       <iframe width="700" height="315" src={`https://www.youtube.com/embed/${state.video==""?"":state?.video?.results[5]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="cls">
        <p className='scrolltit'><span className='overspan'>Title: </span> {state?.single?.original_title}</p> 
         {/* <p className='scrolllan'>{act.original_language}</p>    */}
         <p className='scrolldat'><span className='overspan'> Release Date: </span> {state?.single?.release_date}</p> 
         <p className='scrollpop'><span className='overspan'> Popularity:</span> {state?.single?.popularity}</p> 
        <p className='scrollover'> <span className='overspan'>Overview:</span>{state?.single?.overview} </p>   
         </div>
        </div>
      </div>
        
    </div>
</div>
          
           </Typography>
        </Box> 
       </Modal>   
      
    </div>
  )
}
