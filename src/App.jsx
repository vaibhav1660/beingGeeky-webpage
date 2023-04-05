import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Navbar(){
  return (
    <div>
      <div id="navbar"> 
      {/* bar */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            Being Geeky
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#tutorial">
                  Tutorials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#video">
                  Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#coupon">
                  Coupons
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div>
      <div className="container-fluid pb-5 bg-light" id="being-geeky">
        <div className="container">
          <h1 className="pt-3">Being Geeky</h1>
          <h3 className="pt-3">Your own video and theortical study place.</h3>
          <div className="d-none d-sm-block">
            <p>
              Being Geeky is one of the best platform for the online learning.
              With the best study material.Dummy text is text that is used in
              the publishing industry or by web designers to occupy the space
              which will later be filled with 'real' content. This is required
              when, for example, the final text is not yet available. Dummy text
              is also known as 'fill text'. It is said that song composers of
              the past used dummy texts as lyrics when writing melodies in order
              to have a 'ready-made' text to sing with the melody. Dummy texts
              have been in use by typesetters since the 16th century.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Documentation() {
  return (
    <div>
      <div className="container-fluid" id="document">
        <div className="container">
          <section></section>
          <i className="fa-file-image-o" id="icon"></i>
          <span id="spa">Documentation</span>
          <h2 id="head">All genuine Documentation at one place</h2>
          <p>
            Being Geeky helps the viewer to find all the required documentation
            at one place so that they need not waste time to find offical
            documentation. The most well-known dummy text is the 'Lorem Ipsum',
            which is said to have originated in the 16th century. Lorem Ipsum is
            composed in a pseudo-Latin language which more or less corresponds
            to 'proper' Latin. It contains a series of real Latin words. This
            ancient dummy text is also incomprehensible, but it imitates the
            rhythm of most European languages in Latin script. The advantage of
            its Latin origin and the relative meaninglessness of Lorum Ipsum is
            that the text does not attract attention to itself or distract the
            viewer's attention from the layout.
          </p>
          <button className="btn btn-lg" id="btn">
            Start Your Trial Now
          </button>
          <p style={{fontSize : "medium", marginBottom: "12px"}}>
            You can download Being Geeky from app store or playstore.
          </p>
          <img
            src="https://images.news18.com/ibnlive/uploads/2015/08/Techno-geek.jpg"
            className="img-fluid max-width: 100%"
          />
        </div>
      </div>
    </div>
  );
}


function Tutorial(){
  return (
    <div>
      <div className="container-fluid pb-5 bg-light" id="tutorial">
        <div className="container">
          <h3>The video lecture you shouldn't miss</h3>
          <p>With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p>
          <button className="btn btn-lg">Read More</button>
          <img src="https://tanjakonstantin.com/wp-content/uploads/2021/06/shutterstock_1380306848-1024x724.jpg" className="img-fluid max-width: 100%"/>
        </div>
      </div>
    </div>
  );
};
function Coupons(){
  return(
    <div className="container-fluid bg-light" id="coupon">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-6">
          <img src="https://i0.wp.com/zobuz.com/wp-content/uploads/2020/05/coupon.jpg" className="img-fluid"/>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6">
          <h5>Coupons</h5>
          <p>You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.
          </p>
          <section><a href="#">Already have Coupon?</a></section>
          <br/>
          <hr/>
          <i className="fa-square"></i><span><a href="#">Redeem</a></span>
        </div>
      </div>
    </div>
  )
} 


function Footer(){
  return(
<div className="container-fluid d-none d-sm-block" id="footer" style={{marginTop:"20px"}} >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6>Address</h6>
            <hr/>
            <p>Wotta Workspace
              Street 43,building 4A
              Industrial Area
              Mohali
              Chandigarh</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6>Clients</h6><hr/>
            <ul>
              <li><a href="#">XYZ org</a></li>
              <li><a href="#">ABC org</a></li>
              <li><a href="#">IJK org</a></li>
              <li><a href="#">Qwerty Corp</a></li>
              <li><a href="#">ZAQ PVT</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6>Stack</h6><hr/>
            <ul>
              <li><a href="#">HTML5,CSS,JS</a></li>
              <li><a href="#">React</a></li>
              <li><a href="#">Angular</a></li>
              <li><a href="#">NodeJS</a></li>
              <li><a href="#">Django</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6>About Being Geeky</h6><hr/>
            <ul>
              <li><a href="#">About CEO</a></li>
              <li><a href="#">About Team</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Working Atmosphere</a></li>
              <li><a href="#">Contact Being Geeky</a></li>
            </ul>
          </div>
          <section></section>
        </div>
      </div>
    </div>
  );
};



function App() {
  return (
    <>
      <Navbar />
      <Introduction/>
      <Documentation/>
      <Tutorial/>
      <Coupons/>
      <Footer/>
</>
);
}
export default App
