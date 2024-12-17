import Flash_sales from "./Flash_sales"
// import Hero from "./Hero"
import Latest_collection from "./Latest_collection"
import Selling_product from "./Selling_product"
import Featureproduct from "./featureproduct"
import Banner from "./banner"
import Herosction from "./Herosction"


const Home = () => {
  return (
    <>
    <Herosction/>
      <Featureproduct/>
      <Latest_collection/>
      <Selling_product/>
      <Flash_sales/>
      <Banner/>
    </>
  )
}

export default Home