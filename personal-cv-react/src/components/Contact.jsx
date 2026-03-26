import { useState } from "react";

function Contact() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();  

    if (!name || !email || !message) {
      setError("All fields are required!"); 
      return; 
    }

    alert(`Thank you ${name}, your message has been sent!`);
    
    setName("");
    setEmail("");
    setMessage("");
    setError(""); 
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
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <textarea
            placeholder="Message"
            value={message} 
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