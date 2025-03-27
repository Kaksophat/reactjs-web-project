import React from "react";

export default function Setting() {
  return (
    <section id="setting">
      <div className="container">
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Registration Form</h3>
                        <form id="registrationForm">
                            
                            <div className="mb-3">
                                <label for="name" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Enter your full name" 
                                    required 
                                />
                                <div className="form-text">Please enter your full name.</div>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    required 
                                />
                                <div className="form-text">Please enter a valid email address.</div>
                            </div>
                            <div className="mb-3">
                                <label for="dob" className="form-label">Date of Birth</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="dob" 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="bio" className="form-label">Bio</label>
                                <textarea 
                                    className="form-control" 
                                    id="bio" 
                                    rows="3" 
                                    placeholder="Tell us about yourself" 
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="profileImage" className="form-label">Profile Image</label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="profileImage" 
                                    accept="image/*" 
                                    required
                                />
                            </div>
                           
                            <div className="mb-3">
                                <label for="companyName" className="form-label">Company Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="companyName" 
                                    placeholder="Enter your company name" 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="companySize" className="form-label">Company Size</label>
                                <select 
                                    className="form-control" 
                                    id="companySize" 
                                    required
                                >
                                    <option value="">Select company size</option>
                                    <option value="1-10">1-10</option>
                                    <option value="11-50">11-50</option>
                                    <option value="51-200">51-200</option>
                                    <option value="201-500">201-500</option>
                                    <option value="500+">500+</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="location" className="form-label">Location</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="location" 
                                    placeholder="Enter your company location" 
                                    required 
                                />
                            </div>
                           
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                <div id="formFeedback" className="mt-3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
    <div className="row justify-content-center mt-5">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Login</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe"/>
                            <label className="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
 

<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault"
    >Default switch checkbox input</label
  >
</div>


<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
  <label className="form-check-label" for="flexSwitchCheckChecked"
    >Checked switch checkbox input</label
  >
</div>


<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
  <label className="form-check-label" for="flexSwitchCheckDisabled"
    >Disabled switch checkbox input</label
  >
</div>


<div className="form-check form-switch">
  <input
    className="form-check-input"
    type="checkbox"
    id="flexSwitchCheckCheckedDisabled"
    checked
    disabled
  />
  <label className="form-check-label" for="flexSwitchCheckCheckedDisabled"
    >Disabled checked switch checkbox input</label
  >
</div>
      </div>
    </section>
  );
}
