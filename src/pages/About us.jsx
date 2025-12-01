import "./About.css";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO HEADER */}
      <section className="about-hero">
        <h1>Who We Are</h1>
        <p className="about-tagline">Committed to Health. Driven by Innovation.</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content">
        
        <p>
          <strong>AYLEN</strong> is a pharmaceutical company focused on delivering 
          affordable healthcare to society. Our products are formulated based on 
          three major parameters — <strong>Quality</strong>, <strong>Innovation</strong>, 
          and <strong>Affordability</strong>.
        </p>

        <p>
          We are engaged in the mission of spreading good health and happiness 
          by offering reliable and affordable pharmaceutical formulations. 
          Every product reflects our dedication to strengthening healthcare outcomes.
        </p>

        <p>
          AYLEN is led by a team of seasoned professionals with deep expertise 
          in the healthcare domain. Our team works with a unidirectional and 
          patient-first approach, constantly striving to enhance the lifestyle 
          and well-being of people.
        </p>

        <p>
          At AYLEN, <strong>people remain at the heart of our growth vision</strong>. 
          Our commitment to healthcare excellence drives every step we take.
        </p>

      </section>

    </div>
  );
}
