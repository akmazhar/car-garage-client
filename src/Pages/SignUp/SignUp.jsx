import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const SignUp = () => {
                       


  const {createUser} = useContext(AuthContext);

 const handleSignUp = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  

  console.log(name, email, password);
  // const accepted = form.terms.checked;

  createUser(email, password)
  .then(result => {
    const user = result.user;
    console.log(user)
  })
  .catch(error => console.log(error))
 }


return (
  
     
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
        <img src="/src/assets/images/login/login.svg" alt="" /><img className="w- h-24 mr-5" src="https://i.ibb.co/jrtpsM6/lo.jpg" alt="" />
         
            </div>
     {/* <div className="flex"> 
        <div className="w-80 h-80 mr-5 mt-20"> */}
      {/* <button className="btn"></button>   */}
      {/* </div> */}
      

   
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body bg-green-200 rounded-ee-3xl rounded-ss-3xl px-5"> 
      {/* <h1 className="text-4xl font-bold text-center mb-2 text-orange-700">Sign Up</h1> */}
       <div className="form-control">
        <label className="label">
          
          <span className="label-text  text-xl font-bold text-green-700  font-mono">Name</span>
        </label>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="input input-bordered"
          required
                />

     
        <label className="label">
          <span className="label-text  text-xl font-bold text-green-700  font-mono">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input input-bordered"
          required
                />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-xl font-bold text-green-700   font-mono">Confirm Password</span>
    </label>
    <input
      type="password"
      name="password"
      placeholder="Password"
      className="input input-bordered"
      required
    />
    <label className="label">


      <a href="#" className="label-text-alt text-red-700 font-serif text-sm link link-hover">
      


        Forgot password?
      </a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn bg-orange-700 text-white  ">Sign Up</button>
    <p className="font-serif text-center">
    <i> If you have an account, Please
      
      <Link className="font-serif" to="/login">
        <button className="btn btn-link text-red-500 font-bold ">Login</button>
      </Link></i>
    </p>

<p className="font-mono py-5 font-semibold text-yellow-950 text-center items-center" >Or Login With</p> 
<p>
<div className="flex justify-center">
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-xl rounded-e-3xl text-orange-300"><FcGoogle className='w-8 h-7'></FcGoogle></button>
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-3xl rounded-e-3xl text-blue-900"><AiFillLinkedin className='w-8 h-7'></AiFillLinkedin></button>
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-3xl rounded-e-xl text-blue-900"><AiFillFacebook className='w-8 h-7'></AiFillFacebook></button>
</div>
</p>
              </div>
            </form>
     </div>
     
            {/* {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-700">{success}</p>} */}
          </div>
        </div>
     
    );
};

export default SignUp;