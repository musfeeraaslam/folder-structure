import React from 'react'
import {useState} from 'react'

const Register = () => {

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [address,setAddress] = useState("");
 const [phone,setPhone] = useState("");


 const RegisterUser = (event)=>{
   event.preventDefault();
    console.log({name, email, password, address, phone})
 }

  return (
    <div>
      {/* <h1>Register</h1> */}
     <div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Sign up here</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                  onChange={(e) => setName(e.target.value)}
                   className="form-control form-control-lg" type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                  
                   onChange={(e) => setEmail(e.target.value)}className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                   className="form-control form-control-lg" type="password" name="password" placeholder="Enter password" />
                </div>
                 <div className="form-group">
                  <label>Address</label>
                  <input
                   onChange={(e) => setAddress(e.target.value)}
                   className="form-control form-control-lg" type="email" name="email" placeholder="Enter your address" />
                </div>
                 <div className="form-group">
                  <label>Phone</label>
                  <input
                   onChange={(e) => setPhone(e.target.value)}
                   className="form-control form-control-lg" type="email" name="email" placeholder="Enter your number" />
                </div>
                <div className="text-center mt-3">
                  <button
                  onClick={RegisterUser}
                   className="btn btn-lg btn-primary">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Register
