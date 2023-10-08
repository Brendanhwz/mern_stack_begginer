import { useState } from "react"

const WorkoutForm = () => {
    //Setting the state for the input fields for the form

    //Field (1): Title
    const [title, setTitle] = useState('')
    //Field (2): Load
    const [load, setLoad] = useState('')
    //Field (3): Reps
    const [reps, setReps] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    // const viewTargetValue = (e) => {
    //     console.log(e.target)
    // }
    
    //Form submission handler
    const handleSubmit = async (eventObj) => {
        eventObj.preventDefault()

        const workout = {title, load, reps}

        //Making the fetch request to send data to endpoint controller
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type':"application/json"
            },
            body: JSON.stringify(workout)
        })
        const json = await response.json()

        if (!response.ok) {
            setErrorMsg(json.error)
        }
        if (response.ok) {
            //If response is ok, to clear all the fields input target.value
            setTitle('')
            setLoad('')
            setErrorMsg('')
            setErrorMsg(null)
            console.log('New workout has been added: ', json)
        }
    }
    return (
        //Template for the WorkoutForm
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            {/* Input Field (1) -> Title */}
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange = {(eventObj) => setTitle(eventObj.target.value)}
                value={title}
            />
            {/* Input Field (2) -> Load */}
            <label>Load (in kg):</label>
            <input
                type="number"
                onChange = {(eventObj) => setLoad(eventObj.target.value)}
                value={load}
            />
            {/* Input Field (3) -> Reps */}
            <label>Reps (in numbers):</label>
            <input
                type="number"
                // onChange={viewTargetValue}
                onChange = {(eventObj) => setReps(eventObj.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {/* Error Msg */}
            {errorMsg && <div className="error">{errorMsg}</div>}

        </form>
    )
}

//Exporting thhe WorkoutForm component
export default WorkoutForm