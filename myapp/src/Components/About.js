import React from 'react'

const About = () => {
  return (
    <>
     <div className="container mt-4">
      <h1>About</h1>
      <center>
      <img src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200"
            alt="Loading"
            height="200px"
            />
            </center>

      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
          One of the most important roles of story books is to encourage children to use their imagination. When you read or listen to a story, you are transported to another world where anything is possible. This is important for children to learn, as it helps them to understand and process the world around them.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
          Storybooks help pupils develop emotional intelligence. Storybooks have the power to promote emotional and moral development. Storybooks contain numerous moments of crisis when characters make moral decisions and contemplate the reasons for their decisions, an important skill for children to model.
          </p>
        </div>

        <div className="col-md-6">
          <h3>Details</h3>
          <h6>Organisation Name:Story Time</h6>
          <h6>Address:3-94, Nehru Street, Delhi</h6>
          <h6>location:Delhi,India</h6>
          <h6>contact Details:1234567890</h6>
        </div>

      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body">
          <h3>Additional Details</h3>
          <p>
            Nunc dapibus efficitur dui, vitae lacinia orci auctor vel. Nam non eleifend mauris.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About