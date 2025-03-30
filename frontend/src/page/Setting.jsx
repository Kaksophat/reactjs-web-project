import React from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export default function Setting() {
  return (
    <>
      <div className="container-fluid pt-4 px-4 justify-content-between">
        <div className="row g-4 d-flex  mt-2 bg-secondary">
          <div className="col-sm-12 col-xl-6 ">
            <label style={{ fontSize: "30px" }}>Edit Contact</label>
            <form
              action=""
              className=" p-3"
              style={{ border: "1px solid gray", borderRadius: "10px" }}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Edit Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="0714589763"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Phnom Penh"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Facebook
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="No Lita bek sloy"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Edit twitter
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Elon mask"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit YouTUbe
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Eclass Coding"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Edit Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
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
            <label style={{ fontSize: "30px" }}>Edit Profile</label>
            <form
              action=""
              className=" p-3"
              style={{ border: "1px solid gray", borderRadius: "10px" }}>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Logo name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input placeholder"
                />
                <input
                  type="file"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input placeholder"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  About us tittle
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input placeholder"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Image about us Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Another input placeholder"
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Upload Icon Fav
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input placeholder"
                />
              </div>
            </form>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Allow policy"
            />
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
