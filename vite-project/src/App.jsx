import './App.css'
import { useState } from 'react'
export default function App() {
  const Err_Msg="The number should be greater than 5 and length should be 10"
  const [text,settext]=useState("")
  const [error,seterror]=useState(false)
  const Change=((event)=>{
    settext(event.target.value)
    if( (event.target.value[0]>=5) && (event.target.value.length===10)){
      seterror(false)
    }else{
      seterror(true)
    }
  })
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <div>
      <input onChange={Change} type={"text"}/>
      </div>
      {error?<div style={{color:"red"}}>{Err_Msg}</div>:null}
    </main>
  )
}
