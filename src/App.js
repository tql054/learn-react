import { useEffect, useState, useCallback, useContext } from 'react'
import {Context} from './Context.js'
import Countdown from './Countdown.js'
import { Comment } from './Comment.js'
import Callback from './Callback.js'
import Memo from './Memo.js'
import Reducer from './Reducer.js'
import TodoReducer from './TodoReducer'
import {ThemeContext} from './Theme'
import './App.css'

// Call apies
// const ages = [
//   {
//     id: 1,
//     age: 'under 18'
//   },

//   {
//     id: 2, 
//     age: '18-30',
//   },

//   {
//     id: 3, 
//     age: 'after 30',
//   }
// ]

// const courses = [
//   {
//     id: 1,
//     name: 'React',
//   },

//   {
//     id: 2,
//     name: 'PHP Lavarel'
//   },

//   {
//     id: 3,
//     name: 'NodeJS'
//   }
// ]



// function App() {
//   const [fullName, setFullName] = useState()
//   const [ageSM, setAge] = useState()
//   const [courseSM, setCourse] = useState([])

//   const [jobs, setjobs] = useState(JSON.parse(localStorage.getItem('jobs')) ?? []);
//   const [job, setjob] = useState('')

//   function handleChecked(course) {
//     setCourse(prev=>{
//       if(courseSM.includes(course)){
//         return courseSM.filter(value => value.id !== course.id)
//       } else {
//         return [...courseSM, course]
//       }
//     }) 
//   }

//   function addjob() {
//     setjobs((prev)=>{
//       const newJobs = [...prev, job]

//       // save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setjob('')
//   }

//   function handleSubmit() {
//       console.log({name: fullName, age: ageSM, course: courseSM})
//   }

//   return (
//     <div className='root'>
//       <h1>Register coures</h1>
      
//       <div className='form-group'>
//         <input 
//         value={fullName}
//           type='text'
//           onChange={(e)=> setFullName(e.target.value)}
//         ></input>
//       </div>

      
//          Chọn độ tuổi:
//         {ages.map((age, index)=>{
//           return <div className='form-group' key={index}>
//                   <input 
//                     type='checkbox'
//                     checked = {ageSM === age.id}
//                     onChange = {()=>setAge(age.id)}
//                   ></input>
//                   {age.age}
//                 </div>
//         })} 
//         Chọn khóa học:
        
//         {courses.map((course, index)=>{
//           return <div className='form-group' key={index}>
//                   <input 
//                     type='checkbox'
//                     checked = {courseSM.includes(course)}
//                     // onChange = {()=>{
//                     //   if(courseSM.includes(course)) {
//                     //     courseSM.filter(value => value.id != 1)
//                     //     setCourse(courseSM)
//                     //   }
//                     //   else
//                     //     setCourse([...courseSM, course])
//                     // }}

//                     onChange = {()=> handleChecked(course)}
//                   ></input>
//                   {course.name}
//                 </div>
//         })} 

//         <h1>Bạn muốn học thêm các khóa</h1>
//         <input
//           value={job}
//           onChange={(e)=>setjob(e.target.value)}
//         ></input>
//         <button
//           onClick={()=>addjob()}
//         >Thêm</button>
//         <ul>
//           {jobs.map(job=>{
//             return <li>{job}</li>
//           })}
//         </ul>

//       <button onClick={handleSubmit}>SUBMIT</button>
//     </div>
//   )
// }

function App() {
  const [check, setChecked] = useState(false)
  const [scroll, setScroll] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      setScroll(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  function goToTop() {
    window.scrollTo(0,0)
  }

  const [count, setCount] = useState(60)


  const handleCount  = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const context = useContext(ThemeContext)
  

  return (
    
    <div style={{margin: 20}} className={context.theme?'light':'dark'}>
      <button 
        onClick={(e)=>setChecked(!check)}
      >Toggle</button>

      <button
        onClick={context.toggleTheme}
      >
        {context.theme?'DARK':'LIGHT'}
      </button>

      {check && <Comment/>}

      <h1>{count}</h1>

      <Callback onCount={handleCount}/>
      <Memo/>
      <Reducer/>
      <br/>
      <br/>
      <TodoReducer/>
      {scroll && 
        <button 
          style={{position: 'fixed', 
                  right: '20px', 
                  bottom: '20px'}}
          onClick={goToTop}
            >Go to top
        </button>
      }


    </div>
  )
}


export default App;
