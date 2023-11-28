import { useEffect, useState } from 'react'

// components
import PollDetails from '../components/PollDetails'

const Home = () => {
  const [polls, setPolls] = useState(null)
  
  useEffect(() => {
    const fetchPolls = async () => {
      // this address needs to be changed after development
      const response = await fetch('/poll/')
      const json = await response.json()
      
      if (response.ok) {
        setPolls(json);
      }
    }
    
    fetchPolls()
  }, [])
  
  return (
    <div className="home">
      <div className="polls">
        {polls && polls.map((poll) => (
          <PollDetails key={poll._id} poll={poll}/>
        ))}
      </div>
    </div>
  )
}

export default Home