import React,{useState} from 'react'
import axios from 'axios'
import './Categories.css'

export default function Categories(props){
    const [categories,setCategories]= useState(null)
    axios.get('https://api.chucknorris.io/jokes/categories')
    .then(res=>{
        let data=res.data.map(cat=>{
            return (cat[0].toUpperCase()+cat.substr(1))
        })
        setCategories(data)
    })
    .catch(err=>{
        console.log(err.message)
    })
    let categoriesContent=null;
    if(categories){
        categoriesContent=categories.map((cat,index)=>{
            return(
                <button key={cat} onClick={()=>props.getJoke(cat)} className="categories-button">{cat}</button>
            )
        })
    }
    return(
        <div className="cateogries-container">
            {categoriesContent}
        </div>
    )
}