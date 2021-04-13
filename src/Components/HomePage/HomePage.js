import React,{Component} from 'react'
import Categories from '../Categories/Categories'
import Joke from '../Joke/Joke'
import './HomePage.css'

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            showJoke: false,
            jokeCategory: ""
        }
    }
    getJoke=(e)=>{
        console.log("Category-->",e)
        this.setState({showJoke: true,jokeCategory: e})
    }

    render(){
        let joke=null
        if(this.state.showJoke){
            joke=<Joke category={this.state.jokeCategory}/>
        }
        return(
            <div className="home-container">
                <div className="home-head-div">
                <h2 className="home-head">Chuck Norris</h2>
                </div>
                <div className="home-categories">
                        <Categories getJoke={this.getJoke.bind(this)}/>
                </div>
                {joke}
                <div className="home-footer-div">
                    <div className="home-footer"></div>
                </div>
            </div>
        )
    }
}

export default HomePage