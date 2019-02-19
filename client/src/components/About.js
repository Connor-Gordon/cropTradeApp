import React, { Component } from 'react'
import { connect } from 'react-redux'


import '../styles/aboutStyles.css'



class About extends Component {
  
  render() {
    return (
      <div className='aboutUs'>
        <div className="aboutCon">
            <h2 className="abouttitle">About Us</h2>
            <div>
                <h3 className="theapp">The Problem</h3>
                <p className="pinfo">
                    We created Crop Trade to solve an issue that many local gardeners, farmers, arborists, and horticultural hobbyists encounter. What do you do when you have extra produce after a harvest? 
                </p>
                <h3 className="theapp">The Standards Solutions</h3>
                <ul className="aboutList">
                    <li>You could get a booth at your local farmers market, but often times you don't have enough product or it's not worth the effort.</li>
                    <li>You could attempt to process it into other products, but that often requires learning a new skill.</li>
                    <li>You could always compost or throw away your excess, but that can get smelly and take up a lot of space.</li>
                </ul>
                <h3>The Crop Trade Solution</h3>
                <div>That's where Crop Trade comes in. We wanted to empower gardeners with a new option, to sell, trade, or give away their excess produce to others looking for the freshest food. No more wasted crops, no more surprise care-packages of fruit to your friends and neighbors, simply sign up to join a growing community of growers and gardeners who buy, sell, trade, or donate their excess produce!</div>

            </div>

            <h2>Our Developers:</h2>
            <div className="aboutPics">
                <div>
                    <img className="aboutUsPic" alt="noPic" src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/50422642_3115736975119030_3352768045259948032_o.jpg?_nc_cat=104&_nc_ht=scontent.flas1-1.fna&oh=9dff77d2642e7f068fdf7761c9b79e7e&oe=5CDC5134"/>
                    <p>Connor Gordon</p>
                    <p>Junior developer, long history in horticulture, passion for stuff</p>
                </div>
                <div>
                    <img className="aboutUsPic" alt="noPic" src="https://media.licdn.com/dms/image/C5603AQHJKi7_vxqZJw/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=m71_gBp2L2AYDrAquVUxRWes9Txo3ww5kcaNmU8_wa0"/>
                    <p>Sucely Chavarria</p>
                    <p> Junior developer based out in Las Vegas, Nevada. </p>
                </div>            
                
            </div>
                <div>
                    <h3 className="thespark">The Spark</h3>
                    <p className="pinfo">
                        In the late 2000's, one of our developers became a bit obsessed with tomatoes. He planted so many that he ended up with a seemingly endless supply at harvest, even after gifting at least 50 bags of tomatoes away to friends and neighbors. The idea came up that it would be nice to be able to trade these tomatoes for some other produce, and that morphed into the idea our app is founded on today. Its been over a decade since that first spark, and we still haven't figured out the right balance in our garden (now instead of tomatoes I have a counter full of peppers and citrus), but by deploying this app we hope to give many gardeners like us a new option to deal with their excess produce.
                    </p>
                </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
  }
}
export default connect(mapStateToProps)(About)
