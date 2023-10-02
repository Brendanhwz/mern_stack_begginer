import { useEffect, useState } from "react"

//Components
import WorkoutDetails from '../components/WorkoutDetails'

const Home = () => {
    
    //Setting up of state
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        //Fetching the workouts from the backend nodeapp
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        //Invoking the fetching function
        fetchWorkouts()
    }, [])

    //Returning a template upon component getting called
    return (
        <div className="Home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    // <p key={workout._id}>{workout.title}</p>
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    )
}
export default Home 