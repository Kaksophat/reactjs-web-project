

const Latest_collection = () => {
  return (
    <>
     <section id="latest-collection">
  <div className="container">
    <div className="product-collection row">
      <div className="col-lg-7 col-md-12 left-content">
        <div className="collection-item">
          <div className="products-thumb">
            <img src="images/collection-item1.jpg" alt="collection item" className="large-image image-rounded" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
            <div className="categories">casual collection</div>
            <h3 className="item-title">street wear.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
            <div className="btn-wrap">
              <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 right-content flex-wrap">
        <div className="collection-item top-item">
          <div className="products-thumb">
            <img src="images/collection-item2.jpg" alt="collection item" className="small-image image-rounded" />
          </div>
          <div className="col-md-6 product-entry">
            <div className="categories">Basic Collection</div>
            <h3 className="item-title">Basic shoes.</h3>
            <div className="btn-wrap">
              <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io" />
              </a>
            </div>
          </div>
        </div>
        <div className="collection-item bottom-item">
          <div className="products-thumb">
            <img src="images/collection-item3.jpg" alt="collection item" className="small-image image-rounded" />
          </div>
          <div className="col-md-6 product-entry">
            <div className="categories">Best Selling Product</div>
            <h3 className="item-title">woolen hat.</h3>
            <div className="btn-wrap">
              <a href="shop.html" className="d-flex align-items-center">shop collection <i className="icon icon-arrow-io" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="subscribe" className="padding-large">
  <div className="container">
    <div className="row">
      <div className="block-text col-md-6">
        <div className="section-header">
          <h2 className="section-title">Get 25% off Discount Coupons</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.</p>
      </div>
      <div className="subscribe-content col-md-6">
        <form id="form" className="d-flex justify-content-between">
          <input type="text" name="email" placeholder="Enter your email addresss here" />
          <button className="btn btn-dark">Subscribe Now</button>
        </form>
      </div>
    </div>
  </div>
</section>



    </>
  )
}

export default Latest_collection