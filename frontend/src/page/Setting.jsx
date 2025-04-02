import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../components/context/Shopcontext";
import { Authcontext } from "../components/context/Authcontact";
export default function Setting() {
   const { api } = useContext(ShopContext);
   const {user} = useContext(Authcontext)
  //  const [setting,setsetting] = useState([])
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.files[0] });
  };

 
  const [formdata , setformdata] = useState({
    logo: null,
    image_about: null,
    image_fav : null,
    phone:"",
    address:"",
    about_us:"",
    email:"",
    facebook:"",
    twitter:"",
    youtube:"",
    instagram:""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("phone", formdata.phone);
    formData.append("email", formdata.email);
    formData.append("address", formdata.address);
    formData.append("facebook", formdata.facebook);
    formData.append("twitter", formdata.twitter);
    formData.append("youtube", formdata.youtube);
    formData.append("instagram", formdata.instagram);
    formData.append("about_us", formdata.about_us);
    formData.append("_method", "PUT");
    
  
    if (formdata.logo) formData.append("image_logo", formdata.logo);
    if (formdata.image_about) formData.append("image_about", formdata.image_about);
    if (formdata.image_fav) formData.append("image_favicon", formdata.image_fav);
  
    try {
      const response = await fetch(`${api}setting/1`, {
        method: "POST", 
        headers: {
          Authorization: `Bearer ${user.token}`, 
        },
        body: formData, // FormData does not need "Content-Type"; it is set automatically
      });
  
      const result = await response.json();
      if (result.status === 200) {
        alert("Settings updated successfully!");
      } else {
        alert("Failed to update settings");
      }
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  };
  const show =async()=>{
    const respones = await fetch(`${api}setting/1`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
    const data = await respones.json();
    if(data.status === 200)
      {
        setformdata({
           phone:data.setting.phone,
           email:data.setting.email,
           address:data.setting.address,
           facebook: data.setting.facebook,
           youtube: data.setting.youtube,
           twitter: data.setting.twitter,
           instagram: data.setting.instagram,
           logo:data.setting.image_url,
           about_us:data.setting.about_us,
           image_about:data.setting.image_about_us_url,
           image_fav:data.setting.image_favicon_url
        })
      }    
  }
  useEffect(()=>{
    show()
  },[])
  return (
    <>
      <div className="container-fluid pt-4 px-4 justify-content-between">
        <div className="row g-4 d-flex  mt-2 bg-secondary">
          <div className="col-sm-12 col-xl-6 ">
            <label style={{ fontSize: "30px" }} className="text-white">Edit Contact</label>
            <form
              action=""
              className=" p-3 text-white"
              style={{ border: "1px solid gray", borderRadius: "10px" }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Edit Phone Number
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                 value={formdata.phone}
                 onChange={handlechange}
                 name="phone"
                  placeholder="0714589763"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Address
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                  name="address"
                  value={formdata.address}
                 onChange={handlechange}

                  placeholder="Phnom Penh"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Facebook
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                  value={formdata.facebook}
                 onChange={handlechange}
                  
                  name="facebook"

                  placeholder="No Lita bek sloy"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Edit twitter
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="formGroupExampleInput"
                  name="twitter"
                 onChange={handlechange}

                  value={formdata.twitter}
                  placeholder="Elon mask"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit YouTUbe
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                  // id="formGroupExampleInput2"
                  name="youtube"
                  value={formdata.youtube}
                 onChange={handlechange}

                  placeholder="Eclass Coding"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Email
                </label>
                <input
                  type="text"
                  className="form-control text-white"
                  value={formdata.email}
                 onChange={handlechange}

                  name="email"
                  placeholder="marinalino@gmail.com"
                />
              </div>
            </form>
            <div className="d-flex align-items-center">
              <Switch name="loading" color="primary" />
              <span>Email Notification</span>
            </div>
            <div className="d-flex align-items-center">
              <Switch name="loading" color="primary" />
              <span>Email Notification</span>
            </div>
          </div>
          <div className="col-sm-12 col-xl-6 ">
            <label style={{ fontSize: "30px" }} className="text-white">Edit Profile</label>
            <form
              action=""
              className=" p-3"
              style={{ border: "1px solid gray", borderRadius: "10px" ,color:"white"}}>
              <div className="mb-3 text-white">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Logo 
                </label>
                {/* <input
                  type="text"
                  className="form-control text-white"
                  id="formGroupExampleInput"
                  placeholder="Example input placeholder"
                /> */}
                <input
                  type="file"
                  className="form-control"
                  id="formGroupExampleInput"
                  name="logo"
                  onChange={handleFileChange}
                  placeholder="Example input placeholder"
                />
                {formdata.logo &&(
                <div className="bg-white w-25 mt-4">
                  <img src={formdata.logo} alt="" className="mt-3 "/>
                  </div>
                )}
              </div>
              <div className="mb-3 text-white">
                {/* <label htmlFor="formGroupExampleInput2" className="form-label">
                  About us tittle
                </label> */}
                <h4>About us title</h4>
                <textarea name="abouttitle" cols={65} rows={60} id="" value={formdata.about_us}  className="text-white"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Image about us Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image_about_us"
                  onChange={handleFileChange}
                  placeholder="Another input placeholder"
                />
                  {formdata.image_about &&(
                  <img src={formdata.image_about} alt="" className="mt-3 w-50"/>
                )}
              </div>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Upload Icon Fav
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="image_favicon"
                  onChange={handleFileChange}
                  placeholder="Example input placeholder"
                />
                 {formdata.image_fav &&(
                  <img src={formdata.image_fav} alt="" className="mt-3 "/>
                )}
              </div>
            </form>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Allow policy"
            />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Save
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
