import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pp.png'
import IMG2 from '../../assets/pp.png'
import IMG3 from '../../assets/pp.png'
import IMG4 from '../../assets/pp.png'
import IMG5 from '../../assets/pp.png'
import IMG6 from '../../assets/pp.png'

/**DYNAMICALLY GENERATED PORTFOLIO IMAGES  */
const data = [
  {
    id: 1,
    image: IMG1,
    tittle:'Dashboars and visualisations',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    tittle:'Website templates and graphics',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    tittle:'ECollective Market App',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com',
  },
  {
    id: 4,
    image: IMG4,
    tittle:'Social Media website',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    tittle:'Location and places app',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    tittle:'Advert campeign and statistic dashboard',
    github: 'https://github.com/innobrightcafe',
    demo: 'https:/dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
      {
        data.map(({id, image, tittle, github, demo}) =>{
          return (
            <article key={id}className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={tittle} />
            </div>
            <h3>{tittle}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn'target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary'target='_blank'>Live Demo</a>
            </div>
            </article>
          )
        })
      }
    </div>
    
  </section>
  )
}

export default Portfolio