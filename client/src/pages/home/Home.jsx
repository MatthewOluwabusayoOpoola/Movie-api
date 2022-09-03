import "./Home.scss"
import Navbar from "../../components/navbar/Navbar.jsx"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
const Home = ({type}) => {
  const[lists, setLists] = useState([])

  useEffect()=>{
    const getRandomLists = async ()=> {
      try{
        const res = await axios.get("")
      }catch(err){
        console.log(err)
      }
    }
  }
  return (
    <div className='home'>
      <Navbar />      
      <Featured type={type}/>
      <List />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home