function Contact() {
  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>
        <form>
          <input type="text" id="name" placeholder="Name" />
          <input type="email" id="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
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