import { useContext } from "react";
import { ShopContext } from "./context/Shopcontext";
import { Link } from "react-router-dom";


const About = () => {
  const {setting} = useContext(ShopContext);
  return (
    <>
       <section className="site-banner jarallax min-height300 padding-large" style={{background: 'url(images/hero-image.jpg) no-repeat',marginTop:'200px'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="page-title">About us</h1>
        <div className="breadcrumbs">
          <span className="item">
            <Link to="/">Home /</Link>
          </span>
          <span className="item">About</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="about-us " style={{marginTop:"20px"}}>
  <div className="container ">
    <div className="row d-flex">
      <div className="col-lg-6 col-md-12">
        <div className="image-holder">
          <img src={setting.image_about_us_url} alt="single" className="about-image" />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="detail">
          <div className="display-header">
           
            <p style={{marginBottom:"50px",marginTop:"20px"}}>{setting.about_us}</p>
            <div className="btn-wrap">
              <a href="shop.html" className="btn btn-dark btn-medium d-flex align-items-center" tabIndex={0}>Shop our store<i className="icon icon-arrow-io" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default About