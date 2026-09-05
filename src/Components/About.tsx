import "./About.css";

function About() {
    return (
        <div className="about-page">

            <section className="about-header">
                <h1>About IDB</h1>
                <p>
                    Professional IT Course. 
                </p>
            </section>

            <section className="about-container">

                <div className="about-stats">
                    <div className="stat-box">
                        <h2>15+</h2>
                        <p>Years Running</p>
                    </div>
                    <div className="stat-box">
                        <h2>500+</h2>
                        <p>Graduates</p>
                    </div>
                    <div className="stat-box">
                        <h2>10+</h2>
                        <p>Faculty Members</p>
                    </div>
                    <div className="stat-box">
                        <h2>Weekend</h2>
                        <p>Class Schedule</p>
                    </div>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>
                            To equip working professionals with practical, industry-ready
                            software development skills through hands-on, project-based
                            learning — bridging the gap between academic theory and
                            real-world engineering practice.
                        </p>
                    </div>
                    <div className="about-card">
                        <h3>Our Vision</h3>
                        <p>
                            To be a leading center for applied IT education in Bangladesh,
                            producing graduates capable of designing, building, and
                            deploying modern, scalable software solutions.
                        </p>
                    </div>
                </div>

                <div className="about-features">
                    <h3>Why Choose Daffodil</h3>
                    <ul className="feature-list">
                        <li>Industry-aligned, project-based curriculum</li>
                        <li>Experienced academic and industry faculty</li>
                        <li>Flexible weekend class schedule</li>
                        <li>Hands-on labs and real-world projects</li>
                        <li>Modern tech stack: web, database, cloud</li>
                        <li>Strong alumni and professional network</li>
                    </ul>
                </div>

            </section>

        </div>
    );
}

export default About;