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

    setError("");
   
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(err => {
        console.error("Error:", err);
        setError("Something went wrong. Please try again.");
      });
  }

  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <input
            type="text"
            placeholder="Name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input
            type="email"
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
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2026 Angela Denise G. Ibe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;