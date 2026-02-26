import profile from "../assets/profile.jpg";

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <img src={profile} alt="Profile photo" />
      <p>
        My name is Angela Denise Ibe, a 19-year-old 2nd-year BSIT student at USTP CDO. I live in Libona,
        Bukidnon, and was born on July 29th. My hobbies include cooking, baking, playing board games, and volleyball.</p>
    </section>
  );
}

export default About;