import React, { Component } from 'react'
import { connect } from 'react-redux'


import '../styles/aboutStyles.css'

import '../styles/footerStyles.css'


class About extends Component {
  
  render() {
    return (
      <div className='aboutUs'>
        <div className="aboutCon">
            <h2 className="abouttitle">About Us</h2>
            <div>
                <h3 className="theapp">The Question</h3>
                <p className="pinfo">
                    Crop Trade is an app we created to solve an issue that many local gardeners, farmers, arborists, and horticultural hobbyists encounter. What do you do when you have a significant excess of something after harvest? 
                </p>
                <h3 className="theapp">The Solution</h3>
                <ul>
                    <li>You could get a booth at your local farmers market, but often times it's not worth the effort.</li>
                    <li>You could attempt to process it into other products, but that often requires learning a new skill.</li>
                    <li>You could always compost or throw away your excess, but that can get smelly and take up a lot of space.</li>
                    <li>That's where Crop Trade comes in. We wanted to empower gardeners with a new option, to sell, trade, or give away their excess produce to others looking for the freshest food. No more wasted crops, no more neighbors annoyed by produce care-packages, and no more whining from your family about trying to cook tomatoes into every meal. Simply sign up to join a growing community of growers and gardeners who buy, sell, trade, or donate their excess produce!</li>
                </ul>
                <p>
                </p>    
            </div>
            <div>
                <h3 className="thespark">The Spark</h3>
                <p className="pinfo">
                    The idea was sparked in the late 2000's, when one of our developers became a bit obsessive with tomatoes, and planted so much, that he ended up with a seemingly endless supply. Bags and bags of tomatoes were handed out to anyone who would take them, but even when the supply of friends and neighbors ran out, there was still too many tomatoes left over to use. The idea of replacing those tomatoes with different fruits or veggies turned into the idea that someone should make an app for this. Its been over a decade since that first spark, and we still haven't figured out the right balance in our garden (now instead of tomatoes I have a counter full of peppers and citrus), but we now possess the skills to make this app a reality.
                </p>
            </div>
            <div>
                <h2>Our Developers</h2>
                <div>
                    <img className="aboutUsPic"  src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.0-9/50422642_3115736975119030_3352768045259948032_o.jpg?_nc_cat=104&_nc_ht=scontent.flas1-1.fna&oh=9dff77d2642e7f068fdf7761c9b79e7e&oe=5CDC5134"/>
                    <p>Connor Gordon</p>
                    <p>Junior developer, long history in horticulture, passion for stuff</p>
                </div>
                <div>
                    <img className="aboutUsPic" src="https://media.licdn.com/dms/image/C5603AQHJKi7_vxqZJw/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=m71_gBp2L2AYDrAquVUxRWes9Txo3ww5kcaNmU8_wa0"/>
                    <p>Sucely Chavarria</p>
                    <p> Junior developer based out in Las Vegas, Nevada. </p>
                </div>
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
