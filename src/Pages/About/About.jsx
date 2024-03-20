

const About = () => {
    return (
        <div>
          {/* <div className="card card-side bg-base-100 shadow-xl">
          <div className="flex">
          <div className="2/3">
 <img src="/src/assets/images/about_us/person.jpg" alt="image"/>
 </div>
 <div>
 <div className="card-body">
    <p  className="font-semibold ml-96 text-red-600">About Us</p>
    <h2 className="card-title font-bold  text-4xl">We are qualified<br/> & of experience <br/>in this field</h2>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
    <div className="card-actions justify-end">
      <button className="btn mr-96 bg-red-600 text-white p-2 rounded-xl">Get More Info</button>
    </div>
  </div>
 </div>
          </div>
          </div> */}


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src="/src/assets/images/about_us/person.jpg" className="max-w-sm  rounded-lg shadow-2xl" />
    <img src="/src/assets/images/about_us/parts.jpg" className="w-3/5 absolute left-52 right-5 top-2/3 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className="ml-16">
    <h3 className="font-bold  text-orange-500">About Us</h3>
      <h1 className="text-4xl font-bold">We are qualified<br/> & of experience <br/>in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn bg-orange-600 text-white p-2 rounded-xl justify-end">Get More Info</button>
    </div>
  </div>
</div>

        </div>
    );
};
    
export default About;