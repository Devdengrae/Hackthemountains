import React from 'react';
import { useForm } from 'react-hook-form';
import './registrationform.css';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Registration successful!');
  };

  return (
    <section className="section registration-form">
      <h2>Register for HackTheMountain</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name *</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>Name is required</span>}
        </div>
        <div>
          <label>Email *</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span>Email is required</span>}
        </div>
        <div>
          <label>Phone *</label>
          <input type="tel" {...register('phone', { required: true })} />
          {errors.phone && <span>Phone is required</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
