
const Adminlogin = () => {
  return (
    <>
         <div className="container bg-white p-4 mt-4">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         </div>
    </>
  )
}

export default Adminlogin