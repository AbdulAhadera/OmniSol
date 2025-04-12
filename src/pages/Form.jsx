import React, { useState } from 'react';
import NavbarCopy from '../components/navbarCopy';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';


function Form() {

  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyOrIndividual: '',
    referral: ''
  });

  // State to manage form errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    companyOrIndividual: '',
    referral: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle radio button selection
  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      companyOrIndividual: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    let formValid = true;
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      formValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      formValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      formValid = false;
    }
    if (!formData.companyOrIndividual) {
      newErrors.companyOrIndividual = 'Please select "Company" or "Individual"';
      formValid = false;
    }
    if (!formData.referral) {
      newErrors.referral = 'Referral source is required';
      formValid = false;
    }
    setErrors(newErrors);

    // If the form is valid, navigate to the next page
    if (formValid) {

      e.preventDefault()
      const url = "https://script.google.com/macros/s/AKfycbw3K8X40zEMBOwRDDj3AinpoDc4Loig88X6kuAJeifrfbqnvKz7DBOnh8q7i63C8jqs5A/exec"


      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: (`Name=${formData.name}&Email=${formData.email}&Phone=${formData.phone}&Status=${formData.companyOrIndividual}&FindUs=${formData.referral}`)
      })
        .then(() => {
          navigate('/ai/demo/agents');
        })
        .catch(error => console.log(error))

    }

  };

  return (
    <div className="bg-black text-white flex flex-col px-4">
      <NavbarCopy />

      <section className='flex py-24 justify-center min-h-screen text-white'>

        <div className='w-full md:w-1/2'>
          <h1 className='text-center text-gradient text-4xl md:text-6xl lg:text-6xl font-bold'>Never lose revenue from missed calls again.</h1>

          <p className='text-gray-400 text-center my-8'>
            It's time to embrace the future and elevate your business with groundbreaking, innovative technology. Welcome to Omnisol AI.
          </p>

          <hr />

          <form onSubmit={handleSubmit} className='min-h-52 my-5 bg-gradient-to-t rounded-lg p-6'>
            {/* Name */}
            <div className='block my-4'>
              <label htmlFor="name" className='block text-2xl'>Name <span className='text-red-400'>*</span></label>
              <input
                id="name"
                type="text"
                className={`bg-gray-900/80 font-semibold text-gray-200 my-1 px-4 w-full py-2 rounded-md outline-none focus:outline-secondary/60 ${errors.name ? 'outline-red-500' : ''}`}
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className='text-red-400'>{errors.name}</p>}
            </div>

            {/* Email */}
            <div className='block my-4'>
              <label htmlFor="email" className='block text-2xl'>Email <span className='text-red-400'>*</span></label>
              <input
                id="email"
                type="email"
                className={`bg-gray-900/80 font-semibold text-gray-200 my-1 px-4 w-full py-2 rounded-md outline-none focus:outline-secondary/60 ${errors.email ? 'outline-red-500' : ''}`}
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className='text-red-400'>{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className='block my-4'>
              <label htmlFor="phone" className='block text-2xl'>Phone <span className='text-red-400'>*</span></label>
              <input
                id="phone"
                type="number"
                className={`bg-gray-900/80 font-semibold text-gray-200 my-1 px-4 w-full py-2 rounded-md outline-none focus:outline-secondary/60 ${errors.phone ? 'outline-red-500' : ''}`}
                placeholder='Your Phone Number'
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className='text-red-400'>{errors.phone}</p>}
            </div>

            {/* Company or Individual */}
            <div className='block my-4'>
              <label className='block text-2xl'>Company or Individual <span className='text-red-400'>*</span></label>
              <div className='flex gap-6 my-2'>
                <div className='bg-gray-900/80 w-1/2 py-2 px-2 rounded-lg'>
                  <input
                    id="company"
                    type="radio"
                    name="company_or_individual"
                    value="Company"
                    className="accent-secondary"
                    checked={formData.companyOrIndividual === "Company"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="company" className="ml-2 text-gray-200">Company</label>
                </div>
                <div className='bg-gray-900/80 w-1/2 py-2 px-2 rounded-lg'>
                  <input
                    id="individual"
                    type="radio"
                    name="company_or_individual"
                    value="Individual"
                    className="accent-secondary"
                    checked={formData.companyOrIndividual === "Individual"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="individual" className="ml-2 text-gray-200">Individual</label>
                </div>
              </div>
              {errors.companyOrIndividual && <p className='text-red-400'>{errors.companyOrIndividual}</p>}
            </div>

            {/* Referral Source */}
            <div className='block my-4'>
              <label htmlFor="referral" className='block text-2xl'>Referral Source <span className='text-red-400'>*</span></label>
              <select
                id="referral"
                className={`bg-gray-900/80 font-semibold text-gray-200 my-1 px-4 w-full py-2 rounded-md outline-none focus:outline-secondary/60 ${errors.referral ? 'outline-red-500' : ''}`}
                value={formData.referral}
                onChange={handleChange}
              >
                <option value="" disabled>Select how you discovered us</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Friend">Friend</option>
                <option value="Other">Other</option>
                <option value="Outreach">Outreach</option>
              </select>
              {errors.referral && <p className='text-red-400'>{errors.referral}</p>}
            </div>

            {/* Submit Button */}
            <div className='w-full bg-gradient text-center rounded-full py-2 font-semibold text-xl'>
              <button type="submit" className=''>Submit</button>
            </div>

          </form>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Form;