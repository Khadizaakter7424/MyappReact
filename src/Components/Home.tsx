import "./Home.css";

function Home() {
    return (
        <main>
            {/* ================= Hero Section ================= */}
            <section className="home-hero">
                <span className="hero-badge">Professional Skill Development</span>
                <h1>IsDB IT Scholarship Program</h1>
                <p>Daffodil International Academy</p>
                <a href="#explore" className="hero-btn">Explore Program</a>
            </section>

            {/* ================= Highlights Section ================= */}
            <section className="home-highlights" id="explore">
                
                <div className="highlight-card">
                    <div className="card-icon icon-blue">💻</div>
                    <h3>Industry Oriented</h3>
                    <p>Curriculum built around real-world software development practice.</p>
                </div>

                <div className="highlight-card">
                    <div className="card-icon icon-green">👨‍🏫</div>
                    <h3>Experienced Faculty</h3>
                    <p>Learn from academics and industry professionals.</p>
                </div>

                <div className="highlight-card">
                    <div className="card-icon icon-purple">📅</div>
                    <h3>Flexible Schedule</h3>
                    <p>Weekend classes designed for working professionals.</p>
                </div>

            </section>
        </main>
    );
}

export default Home;