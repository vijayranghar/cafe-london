import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './style.scss'

class Community extends Component {
  render () {
    return (
      <section className="community">
        <div className="container">
          <div className="column">
            <div className="community--tweet">
              <span>@love_food</span>
              <p>
                Waffle sticks in Copenhagen! 🇩🇰😍
                Milk chocolate with sprinkles, dark chocolate
                with coconut and milk chocolate with peanuts!
                [📷: @foodwithmichel] #lovefood
                <FontAwesome name="rocket" />
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Duis aute irure.
              </p>
            </div>
          </div>
          <div className="column">
            <div>
              <h2>Meet our</h2>
              <h2 className="heading-strikethrough">community</h2>
              <div className="badge">Know more</div>
              <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
            </div>
            <div>
              <img className="img-responsive" src={require("../../assets/images/burger.jpg")} alt="burger" />
            </div>
          </div>
          <div className="column">
            <div>
              <img className="img-responsive"  src={require("../../assets/images/pizza.jpg")} alt="pizza" />
            </div>
            <div>
              <p>
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore
              </p>
            </div>
            <div className="community--tweet">
              <span>@buzzfeedfood</span>
              <p>
                Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)
              </p>
            </div>
          </div>
          <div className="column">
            <div className="community--tweet">
              <span>@buzzfeedfood</span>
              <p>
                It’s taco Tuesday! These tacos from @jesseszewczyk
                have no added sugars and are SO good 🌮.
                Find the recipe from the link in our bio! 📸:
                @taylormillerphoto
              </p>
            </div>
            <div>
              <img className="img-responsive" src={require("../../assets/images/cherries.jpg")} alt="cherries" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Community
