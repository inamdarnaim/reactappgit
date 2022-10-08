import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptates
        ex quia. Quas sit incidunt soluta maiores, fuga voluptas vitae!
      </Header>
      <section className='about__story'>
        <div class='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt='Our Story Image' />
          </div>
          <div className='about__section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quae aut eveniet, quaerat perferendis ea tempora magni eligendi
              quis quia libero atque numquam corrupti animi,
            </p>
            <p>
              ratione incidunt earum iure labore id tenetur aliquam? Hic eaque
              corrupti ut consectetur maiores labore reprehenderit fugiat eum,
              cupiditate autem, reiciendis placeat amet dolore fugit alias.
            </p>
            <p>
              Commodi saepe tempora optio laudantium, reiciendis cum deserunt
              labore.
            </p>
          </div>
        </div>
      </section>
      <section className='about__Vision'>
        <div class='container about__vision-container'>
          <div className='about__section-image'>
            <img src={VisionImage} alt='Our Vision Image' />
          </div>
          <div className='about__section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quae aut eveniet, quaerat perferendis ea tempora magni eligendi
              quis quia libero atque numquam corrupti animi,
            </p>
            <p>
              ratione incidunt earum iure labore id tenetur aliquam? Hic eaque
              corrupti ut consectetur maiores labore reprehenderit fugiat eum,
              cupiditate autem, reiciendis placeat amet dolore fugit alias.
            </p>
          </div>
          {/*<div className='about__section-image'>
            <img src={VisionImage} alt='Our Vision Image' />
  </div>*/}
        </div>
      </section>
      <section className='about__mission'>
        <div class='container about__mission-container'>
          <div className='about__section-image'>
            <img src={MissionImage} alt='Our Mission Image' />
          </div>
          <div className='about__section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quae aut eveniet, quaerat perferendis ea tempora magni eligendi
              quis quia libero atque numquam corrupti animi,
            </p>
            <p>
              ratione incidunt earum iure labore id tenetur aliquam? Hic eaque
              corrupti ut consectetur maiores labore reprehenderit fugiat eum,
              cupiditate autem, reiciendis placeat amet dolore fugit alias.
            </p>
            <p>
              Commodi saepe tempora optio laudantium, reiciendis cum deserunt
              labore.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
