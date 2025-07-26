import {useState,useEffect} from 'react';
import api from './../services/api.js'
import Card from './Card'
import { LuTriangleAlert } from "react-icons/lu";
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
function IncidentList() {
    const [incidents,setIncidents]=useState([])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        api.getIncidents()
        .then(res=>{
            setIncidents(res.payload)
            console.log(res.payload)
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    },[])
    
    function removeFromList(resolvedId) {
    setIncidents(prev => prev.filter(item => item._id !== resolvedId));
    }
    
//     const incidents =[
//           {
//     cameraId: "688273a8437cf03ffd93ea46",
//     type: "Face Recognised",
//     timestamp: "2025-07-21T13:15:00Z",
//     thumbnail: "/public/incidents/thumbnail1.png"
//   },
//   {
//     cameraId: "688273a8437cf03ffd93ea44",
//     type: "Unauthorised Access",
//     timestamp: "2025-07-21T08:30:00Z",
//     thumbnail: "/public/incidents/thumbnail2.png"
//   },
//   {
//     cameraId: "688273a8437cf03ffd93ea45",
//     type: "Gun Threat",
//     timestamp: "2025-07-21T10:45:00Z",
//     thumbnail: "/public/incidents/thumbnail3.png"
//   },
//   {
//     cameraId: "688273a8437cf03ffd93ea46",
//     type: "Face Recognised",
//     timestamp: "2025-07-21T13:15:00Z",
//     thumbnail: "/public/incidents/thumbnail4.png"
//   },
// {
//     cameraId: "688273a8437cf03ffd93ea46",
//     type: "Face Recognised",
//     timestamp: "2025-07-21T13:15:00Z",
//     thumbnail: "/public/incidents/thumbnail4.png"
//   }] 

  return (
    <div className='flex flex-col w-full md:w-1/2 bg-[#131313] rounded-lg max-h-[500px] flex-wrap'>
        <div className='flex items-center h-14 sticky top-0 z-10 p-4'>
            <span className='w-6 h-6 mr-2 flex items-center justify-center rounded-3xl border-2 border-[#450a0a] bg-[#7f1d1d]'><LuTriangleAlert className='text-[#f87171] mb-0.5 w-4 h-4' /></span>
            <p className=' text-lg font-semibold leading-none'>
                <span className='mr-2'>
                {
                incidents.length>0 ? incidents.length : 0
                }
                </span>unresoved incidents</p>
        </div>
        {
            loading ?
        <TailChase size="16" speed="1.75"color="#ffcc00" /> :
        <ul className='overflow-y-auto  px-3 pb-6 h-[400px] scrollbar-hide scroll-smooth snap-y snap-proximity'>
        {
            incidents.map((incident,i)=>(  
            <Card key={i} incident={incident} onResolve={removeFromList}/>
            ))
        }
        </ul>
        }
        
    </div>
  )
}

export default IncidentList