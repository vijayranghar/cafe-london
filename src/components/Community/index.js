import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import './style.scss'

class Community extends Component {
  render () {
    return (
      <section className="community">
        <div className="container">
          <div className="column">
            <div className="community__tweet">
              <div className="community__tweet-details">
                <span>@love_food</span>
                <p>
                  Waffle sticks in Copenhagen! <span role='img' aria-label="smiley">🇩🇰😍</span>
                  Milk chocolate with sprinkles, dark chocolate
                  with coconut and milk chocolate with peanuts!
                <span role='img' aria-label="camera">[📷:</span> @foodwithmichel] #lovefood
                  <FontAwesome name="rocket" />
                </p>
              </div>
              <div className="community__tweet-count">
                <FontAwesome name="comment" />&nbsp;&nbsp;212
                <FontAwesome name="heart" />&nbsp;&nbsp;14.1k
              </div>
            </div>
            <div className="community__recipe-info">
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
            <div className="community__recipe-image">
              <div></div>
            </div>
          </div>
          <div className="column">
            <div className="community__recipe-image">
              <div></div>
            </div>
            <div className="community__recipe-info">
              <p>
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore
              </p>
            </div>
            <div className="community__tweet">
              <div className="community__tweet-details">
                <span>@buzzfeedfood</span>
                <p>
                  Getting into long weekend mode like <span role='img' aria-label="food">🍤 </span>#pancitpalabok (<span role='img' aria-label="camera">📷 </span>@jeepneynyc)
                </p>
              </div>
              <div className="community__tweet-count">
                <FontAwesome name="comment" />&nbsp;&nbsp;120
                <FontAwesome name="heart" />&nbsp;&nbsp;12.1k
              </div>
            </div>
          </div>
          <div className="column">
            <div className="community__tweet">
              <div className="community__tweet-details">
                <span>@buzzfeedfood</span>
                <p>
                  It’s taco Tuesday! These tacos from @jesseszewczyk
                  have no added sugars and are SO good <span role='img' aria-label="food">🌮</span>.
                  Find the recipe from the link in our bio! <span role='img' aria-label="camera">📸</span>:
                  @taylormillerphoto
                </p>
              </div>
              <div className="community__tweet-count">
                <FontAwesome name="comment" />&nbsp;&nbsp;60
                <FontAwesome name="heart" />&nbsp;&nbsp;4.1k
              </div>
            </div>
            <div className="community__recipe-image">
              <div></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Community
