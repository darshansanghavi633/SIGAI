import React from 'react'

export default function Card() {
  return (
    <React.Fragment>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  <div className="card h-100" style={{border:"solid",borderColor:"white"}}>
      <div className="card-body" style={{backgroundColor:"#57357F",color:"white"}}>
        <h5 className="card-title" style={{color:"#12e6c8"}}>Social Media</h5>
        <p className="card-text"> AI considers your likes and the accounts you follow to determine what posts you are shown on your explore tab. </p>
      </div>
      <div className="card-footer">
        <small className="text-body-primary">Instagram</small>
      </div>
    </div>
  </div>
  <div className="col">
  <div className="card h-100" style={{border:"solid",borderColor:"white"}}>
      <div className="card-body" style={{backgroundColor:"#57357F",color:"white"}}>
        <h5 className="card-title" style={{color:"#12e6c8"}}>Chatbots</h5>
        <p className="card-text">AI chatbots can comprehend natural language and respond to people online who use the "live chat" feature that many organizations provide for customer service. All in all, these AI chatbots can help to improve customer satisfaction.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-primary">ChatGPT</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{border:"solid",borderColor:"white"}}>
      <div className="card-body" style={{backgroundColor:"#57357F",color:"white"}}>
        <h5 className="card-title" style={{color:"#12e6c8"}}>Autonomous Vehicles</h5>
        <p className="card-text">Automobile manufacturing companies like Toyota, Audi, Volvo, and Tesla use machine learning to train computers to think and evolve like humans when it comes to driving in any environment and object detection to avoid accidents.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-primary">Tesla</small>
      </div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}
