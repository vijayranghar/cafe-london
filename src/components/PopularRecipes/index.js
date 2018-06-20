import React, { Component } from 'react'
import './style.scss'

const recipes = [
  {
    size: 'large',
    backgroundImage: require('../../assets/images/image1.jpg'),
    serving: 4,
    difficulty: 'easy',
    name: 'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
    description: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
    chefChoice: true,
  },
  {
    size: 'small',
    backgroundImage: require('../../assets/images/image2.jpg'),
    serving: 4,
    difficulty: 'easy',
    name: 'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
    description: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
    chefChoice: false,
  },
  {
    size: 'small',
    backgroundImage: require('../../assets/images/image3.jpg'),
    serving: 2,
    difficulty: 'hard',
    name: 'PINEAPPLE FRUIT SALAD WITH FRESH CREAM',
    description: 'The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno',
    chefChoice: true,
  },
  {
    size: 'small',
    backgroundImage: require('../../assets/images/image4.jpg'),
    serving: 2,
    difficulty: 'medium',
    name: 'CHEESE, SPINACH & MUSHROOM STUFFED CHI…',
    description: 'Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken…',
    chefChoice: true,
  },
  {
    size: 'small',
    backgroundImage: require('../../assets/images/image1.jpg'),
    serving: 2,
    difficulty: 'hard',
    name: 'CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST',
    description: 'Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…',
    chefChoice: false,
  },
]
class PopularRecipes extends Component {
  render () {
    const renderRecipe = recipes.map(({size, backgroundImage, serving, difficulty, name, description, chefChoice}, index) => {
      return (
        <div className={`recipe ${size}`} key={index}>
          <div className="recipe--image" style={{'backgroundImage':`url(${backgroundImage})`}}>
            <div className="recipe--serving">
              <div className="count">{serving}</div>
              servings
            </div>
            <a href="#" className="recipe--info"></a>
          </div>
          <h5>{difficulty}</h5>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      )
    })
    return (
      <section className="popular-recipes">
        <div className="container">
          <h2>Popular Recipes</h2>
          <div className="badge">See all</div>
          <h3>Do you want to share your own recipe?</h3>
          <div className="badge">Send it now</div>
          {renderRecipe}
        </div>
      </section>
    )
  }
}

export default PopularRecipes
