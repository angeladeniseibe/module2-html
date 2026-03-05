import { useState } from "react";

function Contact() {
  // Step 1: Add form state
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [message, setMessage] = useState(""); // State for message
  const [error, setError] = useState(""); // State for error message

  // Step 2: Handle form submission
  function handleSubmit(e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Step 3: Validate fields
    if (!name || !email || !message) {
      setError("All fields are required!"); // Show an error if any field is empty
      return; // Prevent form submission if validation fails
    }

    // If all fields are filled, submit the form
    alert(`Thank you ${name}, your message has been sent!`);
    
    // Optionally reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
    setError(""); // Clear error message
  }

  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {/* Display error message if fields are empty */}
          {error && <div style={{ color: "red" }}>{error}</div>}
          
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)} // Handle input change
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Handle input change
          />
          <textarea
            placeholder="Message"
            value={message} // Controlled input
            onChange={(e) => setMessage(e.target.value)} 
          ></textarea>
          <br />
          <button type="submit" id="submitBtn">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2026 Angela Denise G. Ibe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;