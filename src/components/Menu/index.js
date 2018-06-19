import React, { Component } from 'react'

import { Parallax } from 'react-scroll-parallax'

import './style.scss'

const foodMenu = [
  {
    category:'Starters',
    dishes:[
      {
        name:'QUINOA CROQUETTAS',
        description:'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)',
        price: '£4.95',
      },
      {
        name:'CHIFA CHICHARRONES',
        description:'Slow cooked, crispy pork belly with sweet soy sauce',
        price: '£6.95',
      },
      {
        name:'CALAMARES',
        description:'Crispy baby squid with pickled jalapeño miso salsa',
        price: '£6.95',
      }
    ],
  },
  {
    category:'Main Courses',
    dishes:[
      {
        name:'EL CLASICO',
        description:'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
        price: '£8.95',
      },
      {
        name:'TIRADITO CALLAO',
        description:'Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies',
        price: '£8.95',
      },
    ],
  },
  {
    category:'Sides',
    dishes:[
      {
        name:'SUPER POLLO',
        description:'Marinated corn fed chicken pieces with rocotto salsa',
        price: '£4.95',
      },
      {
        name:'PATATAS FRITAS',
        description:'Sweet potato fries with aji rocotto mayonnaise (v)',
        price: '£3.95'
      }
    ],
  },
  {
    category:'Desserts',
    dishes:[
      {
        name:'ICECREAM',
        description:'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
        price: '£8.95',
      },
      {
        name:'TIRAMISU',
        description:'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
        price: '£8.95',
      },
      {
        name:'CHOCOLATE BROWNIE',
        description:'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)',
        price: '£8.95',
      }
    ],
  }
]

class Menu extends Component {
  render () {
    let renderMenu = []
     renderMenu.push(foodMenu.map(({category, dishes}) => {
       const dishCategoryName = category
       const dishesName = dishes.map(({name,description,price}) => {
         return (
          <div>
            {name}
            {description}
            {price}
          </div>
        )
       })
       return (
         <div>
          <h2>{dishCategoryName}</h2>
          <li>{dishesName}</li>
         </div>
       )
    }))
    return (
      <section className="menu">
        <div className="container">
          <h2>Our menu</h2>
          <span>Know more</span>
          {renderMenu}
        </div>
      </section>
    )
  }
}

export default Menu
