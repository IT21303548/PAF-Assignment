import React, { useState } from 'react'

function WorkoutPlan() {
  const [workout, setworkout] = useState('');
  const handleEdit = () => {
   
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    
    console.log('Delete button clicked');
  };
  return (
    <div>
    <h2>WorkoutPlans</h2>
    <form >
      <div>
        <label htmlFor="workout">My Workout Plan Nmae :</label>
        <input
          type="text"
          id="workout"
          value={workout}
          onChange={(e) => setworkout(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="exersices">Exersices :</label>
        <input
          type="text"
          id="exersices"
          value={workout}
          onChange={(e) => setworkout(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="sets">Sets :</label>
        <input
          type="text"
          id="sets"
          value={workout}
          onChange={(e) => setworkout(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="repetitions">Repetitions :</label>
        <input
          type="text"
          id="repetitions"
          value={workout}
          onChange={(e) => setworkout(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="goal">Goal :</label>
        <input
          type="text"
          id="goal"
          value={workout}
          onChange={(e) => setworkout(e.target.value)}
          required
        />
      </div>
      
      <div>
        <button type="button" onClick={handleEdit}>Edit</button>
        <button  type="button"  onClick={handleDelete}>Delete</button>
      </div>
    </form>
  </div>
  )
}

export default WorkoutPlan
