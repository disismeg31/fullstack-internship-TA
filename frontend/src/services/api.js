import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL

function getIncidents(){
 return axios.get(`${BASE_URL}/api/incidents?resolved=false`)
 .then(res=>res.data)
 .catch(err=> {throw err})
}

function resolveIncidents(id){
    return axios.patch(`${BASE_URL}/api/incidents/${id}/resolve`)
    .then(res=>res.data)
    .catch(err=> {throw err})
}

export default  {
    getIncidents,
    resolveIncidents
}