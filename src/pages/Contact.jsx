// ContactPage.js
import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling

const ContactPage = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State to handle errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation (simple regex for demonstration purposes)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation (format: 03XX-XXXXXXX)
    const phonePattern = /^03\d{2}-\d{7}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (03XX-XXXXXXX)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return boolean indicating if the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Form is valid, submit the form (e.g., send to server)
      console.log('Form submitted:', formData);
      // Clear form after submission
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  return (
    <>


    <div className='contact-container'>
      <h2 className='contact-heading'> GET IN TOUCH</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        {/* Name and Email on the same line */}
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='name' className='labels-contact'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-input'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className='error'>{errors.name}</small>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'className='labels-contact'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-input'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className='error'>{errors.email}</small>}
          </div>
        </div>

        {/* Phone number on a separate line */}
        <div className='form-group'>
          <label htmlFor='phone' className='labels-contact'>Phone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            className='form-input'
            placeholder='03XX-XXXXXXX'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <small className='error'>{errors.phone}</small>}
        </div>

        {/* Message input */}
        <div className='form-group'>
          <label htmlFor='message' className='labels-contact'>Message</label>
          <textarea
            id='message'
            name='message'
            className='form-textarea'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <small className='error'>{errors.message}</small>}
        </div>

        {/* Send button */}
        <button type='submit' className='send-button'>Send</button>
      </form>
    </div>
    </>
 
  );
}

export default ContactPage;
