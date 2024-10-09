import React from 'react'
import { Link } from 'react-router-dom'

function CreateWorkoutPlan() {
  return (
    <div style={{backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/01/41/94/56/1000_F_141945674_hwZpIanQhdRBGYhnkv9oo21GycUkOwSw.jpg")',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
    }}
     className='workout template d-flex justify-content-center align-items-center 100-w vh-100 '>
        <div className='40-w p-5 rounded'>
              <form>
            <h3 className='text-center' style={{ fontSize: '40px', color: 'Lightblue' }} >My Workout Plan</h3>
            <div className='mb-2'>
                <label htmlFor="workout" style={{ fontSize: '30px', color: 'Lightgreen' }}>Workout Plan Name</label>
                <input type="text" style={{ fontSize: '20px' }} placeholder='Enter your workout plan name' className='form-control'/>

            </div>

            <div className='mb-2'>
                <label htmlFor="exersices" style={{ fontSize: '30px', color: 'Lightgreen' }}> Exersices</label>
                <input type="text" style={{ fontSize: '20px' }} placeholder='Enter your exersices name' className='form-control'/>

            </div>

            <div className='mb-2'>
                <label htmlFor="sets" style={{ fontSize: '30px', color: 'Lightgreen' }}> Sets</label>
                <input type="text" style={{ fontSize: '20px' }} placeholder='Enter your sets' className='form-control'/>

            </div>

            <div className='mb-2'>
                <label htmlFor="repetitions" style={{ fontSize: '30px', color: 'Lightgreen' }}> Repetitions </label>
                <input type="number" style={{ fontSize: '20px' }} placeholder='Enter your repetitions' className='form-control'/>

            </div>

            <div className='mb-2'>
                <label htmlFor="goal" style={{ fontSize: '30px', color: 'Lightgreen' }}> Goal</label>
                <input type="text" style={{ fontSize: '20px' }} placeholder='Enter your next goal' className='form-control'/>

            </div>

                { <p className='text-right'>
                         <Link to='/WorkoutPlans' className='btn btn-primary' style={{ fontSize: '25px', color: 'yellow' }}>Save</Link> 
                </p> }

              </form>
        </div>
      
    </div>
  )
}

export default CreateWorkoutPlan
