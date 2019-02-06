import React, { Component } from 'react'
import { connect } from 'react-redux'


import '../styles/footerStyles.css'




class About extends Component {
  
  render() {
    return (
      <div className='aboutUs'>
        <div>
            <h2>About Us</h2>
            <div>
                <h3>The App</h3>
                Crop Trade is an app we created to solve an issue that many local gardeners, farmers, arborists, and horticultural hobbyists encounter. What do you do when you have a significant excess of something after harvest? Now you could always throw out or compost your excess, and there's many ways to try and process your produce into other products, but many times it becomes too much effort or learning a new skill. That's where Crop Trade comes in. We wanted to empower gardeners with a new option, to trade or give away their excess produce to nearby enthusiasts. No more wasted crops, no more neighbors annoyed by produce care-packages, and no more whining from your family about trying to cook tomatoes into every meal. Simply join our app, and find like-minded people looking to trade.
            </div>
            <div>
                <h3>The Spark</h3>
                The idea was sparked in the late 2000's, when one of our developers became a bit obsessive with tomatoes, and planted so much, that he ended up with a seemingly endless supply. Bags and bags of tomatoes were handed out to anyone who would take them, but even when the supply of friends and neighbors ran out, there was still too many tomatoes left over to use. The idea of replacing those tomatoes with different fruits or veggies turned into the idea that someone should make an app for this. Its been over a decade since that first spark, and we still haven't figured out the right balance in our garden (now instead of tomatoes I have a counter full of peppers and citrus), but we now possess the skills to make that a reality
            </div>
            <div>
                <h2>Our Developers</h2>
                <div>
                    <img alt="nopicyet" src=""/>
                    <p>Connor Gordon</p>
                    <p>Junior developer, past experience in horticulture, passion for stuff</p>
                </div>
                <div>
                    <img alt="nopicyet" src=""/>
                    <p>Sucely Chavarria</p>
                    <p></p>
                </div>
            </div>
        </div>
        <div>
          
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
