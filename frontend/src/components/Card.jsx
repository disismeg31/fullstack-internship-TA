import React,{useContext,useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import thumbnail from './../assets/thumbnail4.png'
import { BiSolidDoorOpen } from "react-icons/bi";
import { BiSolidCctv } from "react-icons/bi";
import { WiTime4 } from "react-icons/wi";
import { FaGun } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { DurationContext } from '../context/DurationProvider';
import api from './../services/api.js'
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'


function Card({incident,onResolve}) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
     const {formatDuration} = useContext(DurationContext);

     const typeIcons = {
    'Face Recognised': <FaUserNinja className='text-[#027881]' size={19} />,
    'Unauthorised Access': <BiSolidDoorOpen className='text-[#f97316]' size={20} />,
    'Gun Threat': <FaGun className='text-[#ef4444]' size={19} />,
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };
    const handleResolve  = async(id)=>{
    try {
        setLoading(true);
        await api.resolveIncidents(id);
        setOpen(true);
        if (typeof onResolve === 'function') {
        onResolve(id); 
        }
     } 
     catch (err) {
        console.error('Error resolving incident:', err);
        setError(true);
    }
    finally{
        setLoading(false);
    }
    }
  return (
    <>
    <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Incident marked as resolved"
    >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Incident resolved!
        </Alert>
    </Snackbar>
    <Snackbar
        open={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        >
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
        Failed to resolve incident.
        </Alert>
    </Snackbar>
    <li className='ml-1 mr-3 mb-4 mt-1 h-auto flex justify-between items-start scroll-mt-14 snap-start'>
    <div className='flex'>
        <div className=''>
            <img className='h-20 w-28 object-cover rounded-md flex-shrink-0' src={thumbnail} alt="" />
        </div>
        <div className='text-xs px-3 w-[180px] sm:w-[220px] md:w-[240px] lg:w-auto break-words'>
            <p className=' truncate overflow-hidden whitespace-nowrap w-[180px] flex items-center sm:text-xs md:text-sm  mb-0 lg:mb-5.5 font-bold'><span className='mr-2'>
                {typeIcons[incident.type] ||<BiSolidDoorOpen className='text-[#f97316]' size={20}/>}
            </span>{incident.type}</p>
            <p className='flex items-center sm:text-xs md:text-sm mb-0.5  font-normal'><span className='mr-1'><BiSolidCctv/></span>Shop Front Camera A</p>
            <p className='flex items-center sm:text-xs md:text-sm  font-bold'><span className='mr-1'><WiTime4/></span>{formatDuration(incident.tsStart, incident.tsEnd)}</p>
        </div>
    </div>
    <div className='flex px-3 py-2.5'>
        <button 
        disabled={loading || incident.resolved}
        onClick={()=>{handleResolve(incident._id)}}
        className='hidden md:flex items-center text-[#ffcc00] text-xs cursor-pointer'>{
        loading?
        <TailChase size="16" speed="1.75"color="#ffcc00" /> :
        <span className='flex ml-0 mt-0 lg:ml-1 lg:mt-0.5'>Resolve <MdChevronRight size={20}/></span>
        }
        </button>
        <button 
        disabled={loading || incident.resolved}
        onClick={()=>{handleResolve(incident._id)}}
        className='md:hidden text-[#ffcc00] text-[10px] cursor-pointer'>
            {
                loading?
                <TailChase size="16" speed="1.75"color="#ffcc00" /> :
                <MdChevronRight size={20} />
            }
        </button>
    </div>
    </li>
    </>
    
  )
}

export default Card