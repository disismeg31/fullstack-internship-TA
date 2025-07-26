import React from 'react'
import VideoPlayer from './VideoPlayer'
import IncidentList from './IncidentList'
function Dashboard() {
  return (
    <div className='flex flex-col mt-19 md:mt-0 md:flex-row w-full justify-between items-center gap-6 p-6'>
        <VideoPlayer/>
        <IncidentList/>
    </div>
  )
}

export default Dashboard