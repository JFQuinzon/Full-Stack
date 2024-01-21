import React from 'react'
import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutsForm from '../components/WorkoutsForm'

function Home() {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const respose = await fetch('/api/workouts')
      const json = await respose.json()

      if (respose.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    
    fetchWorkouts()
  }, [])



  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}

      </div>
        <WorkoutsForm/>
    </div>
  )
}

export default Home