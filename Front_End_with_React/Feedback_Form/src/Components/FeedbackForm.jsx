import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
  //We create a state to handle the input data from the form.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  }); 

  const ratings = [1,2,3,4,5] //Set up ready for mapping over in the ratings input field.

  const handleChange = (event) => { 
    /*Function to handle the input change. We use event.target to refer to DOM event that triggered the change.
    The name property is the name of the input field, the value is the inputted value.
    setFormData is function as defined in the above state definiton.
    Updates the form data with the original data  and the newly added data.*/
    const { name, value } = event.target; 
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    /*Function to handle the form submission. It prevents default form submission.
    It then provides a confirmation box displaying the entered details.
    If the user confirms, the form data is logged to the console and the form is reset.
    An alert is displayed to the user thanking them for their feedback.
    */
   event.preventDefault(); //Prevent the default form submission
   const confirmationMessage = 
    `Name: ${formData.name} 
    Email: ${formData.email}
    Feedback: ${formData.feedback}
    Rating: ${formData.rating}`; //Confirmation message to display to the user

    const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting Feedback', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '',
      });
      alert('Thank you for your feedback!'); 
   }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    <form  onSubmit={handleSubmit} className="feedback-form">
      <h2>We'd Love to Hear From You!</h2>
      <p>Please share your feedback with us.</p>
      <input
        type="text"
        name="name"
        placeholder="Your Name" //Input field for name
        value = {formData.name} //Bind form input to the data state
        onChange={handleChange} //Handle state change
      /> 
      <input
        type="email"
        name="email" 
        placeholder="Your Email" //Input field for email
        value = {formData.email} 
        onChange={handleChange} 
      /> 
      <textarea
        name="feedback"
        placeholder="Your Feedback" // Textarea for feedback
        value = {formData.feedback} 
        onChange={handleChange} 
      >
      </textarea> 
      <div className="rating">
        <span> Rate us: </span>
        {ratings.map((rating) => (
          <p key = {rating}>
            <input 
              type = 'radio' 
              name = 'rating'
              value = {rating}
              onChange={handleChange}
            />{`  `}{rating}
          </p>))}
      </div>

      <button type="submit">Submit Feedback</button> 
    </form>
    </>
  );
};

export default FeedbackForm;
