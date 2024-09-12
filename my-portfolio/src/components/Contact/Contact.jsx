import React, { useState } from 'react';
import './Contact.css'; 

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
      alert('Form submitted');
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-form">
        <h2>Contact Me!  <i class="bi bi-envelope"></i></h2>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={() => !form.name && setErrors({ ...errors, name: 'Name is required' })}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={() => {
                if (!form.email) setErrors({ ...errors, email: 'Email is required' });
                else if (!/\S+@\S+\.\S+/.test(form.email)) setErrors({ ...errors, email: 'Email is invalid' });
              }}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={() => !form.message && setErrors({ ...errors, message: 'Message is required' })}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button className='button' type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
  
}

export default Contact;
