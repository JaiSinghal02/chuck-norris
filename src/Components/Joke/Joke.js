import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './Joke.css'

export default function Joke(props){
    const [joke,setJoke]=useState("")
    const getJoke=()=>{
        const category=props.category[0].toLowerCase()+props.category.substr(1)
        axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res=>{
            console.log(res)
            setJoke(res.data.value)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    useEffect(()=>{
        getJoke()
    },[props.category])
    return(
        <div className="joke-container">
            <h5 className="joke-category">Selected Category : {props.category}</h5>
            <div className="joke-body">
                <div>
                    {joke}
                </div>
            </div>
            <div className="joke-new-joke">
                <button onClick={()=>getJoke()}>New Joke</button>
            </div>
        </div>
    )
}