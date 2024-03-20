import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const Login = () => {
  const {signIn} = useContext(AuthContext);
 
const handleLogin = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  console.log(email, password);
  signIn(email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(error => console.log(error));
}

return (
    <div>
     
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
        <img src="/src/assets/images/login/login.svg" alt="" /> <img className="w- h-24" src="https://i.ibb.co/q78mzCW/Screenshot-2023-10-24-121543.png" alt="" />
            </div>
        {/* <div className="w-96 h-96"> 
       </div> */}

 
  <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
    

    <form onSubmit={handleLogin} className="card-body bg-yellow-300 rounded-e-full"> 



      <div className="form-control">
        <label className="label">
          <span className="label-text  text-xl font-bold text-orange-800 px-5 font-mono">Email</span>
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
      <span className="label-text ml-3 text-xl font-bold text-orange-800  font-mono">Password</span>
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
    <button className="btn bg-orange-700 text-white">Login</button>
    <p className="font-serif text-start ml-20">
    <i>  Do not have an account?
      
      <Link className="font-serif" to="/signup">
        <button className="btn btn-link text-green-700 font-bold">Sign Up</button>
      </Link>first.</i>
    </p>

<p className="   font-mono py-5 font-semibold text-orange-800 text-center items-center" >Or Login With</p> <p>
<div className="flex justify-center">
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-xl rounded-e-3xl text-orange-300"><FcGoogle className='w-8 h-7'></FcGoogle></button>
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-3xl rounded-e-3xl text-blue-900"><AiFillLinkedin className='w-8 h-7'></AiFillLinkedin></button>
<button className="btn px-2 ml-5 py-2 gap-2 rounded-s-3xl rounded-e-xl text-blue-900"><AiFillFacebook className='w-8 h-7'></AiFillFacebook></button>
</div>
</p>
              </div>
            </form>
            {/* {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-700">{success}</p>} */}
          </div>
        </div>
      </div>


      

    </div>
  );
};

export default Login;
