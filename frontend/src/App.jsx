 import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import DurationProvider from './context/DurationProvider'
function App() {

  return (
    <>
    <DurationProvider>
    <div className='flex flex-col'>
      <Navbar/>
      <Dashboard/>
    </div>
    </DurationProvider>  
    </>
  )
}

export default App
