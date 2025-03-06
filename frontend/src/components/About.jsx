

const About = () => {
  return (
    <>
       <section className="site-banner jarallax min-height300 padding-large" style={{background: 'url(images/hero-image.jpg) no-repeat'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="page-title">About us</h1>
        <div className="breadcrumbs">
          <span className="item">
            <a href="index.html">Home /</a>
          </span>
          <span className="item">About</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="about-us " style={{marginTop:"20px"}}>
  <div className="container ">
    <div className="row d-flex align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="image-holder">
          <img src="images/single-image1.jpg" alt="single" className="about-image" />
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="detail">
          <div className="display-header">
            <h2 className="section-title">How was Shop started?</h2>
            <p>Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
              <br />
              Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. </p>
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