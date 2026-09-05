import { useState } from "react";
import Prop from "./Pro/Prop";
import { Greet } from "./Pro/Greet";
import Greeting from "./Pro/Greeting";
import { Trainee } from "./Pro/Trainee";
import Container from "./Pro/Container";
import "./Propsdata.css";

function Propsdata() {
    const [round, setRound] = useState<number>(69);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Jannat");

    // Trainees State
    const [trainees, setTrainees] = useState([
        { name: "Jannat", age: 25 },
        { name: "Rina", age: 30 },
        { name: "Bina", age: 28 },
        { name: "Tina", age: 28 },
    ]);

    // Form Field States
    const [nameInput, setNameInput] = useState<string>("");
    const [ageInput, setAgeInput] = useState<string>("");

    // Submit Handler
    const handleAddTrainee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents default form refresh behavior

        if (!nameInput.trim() || !ageInput.trim()) {
            alert("Please fill in both name and age!");
            return;
        }

        const newTrainee = {
            name: nameInput.trim(),
            age: parseInt(ageInput, 10),
        };

        // Functional state update ensures the newest array is always appended
        setTrainees((prevTrainees) => [...prevTrainees, newTrainee]);

        // Reset Inputs
        setNameInput("");
        setAgeInput("");
    };

    return (
        <div className="props-page">
            <section className="props-header">
                <h1>React Props Playground</h1>
                <p>
                    Interactive demonstration showing how parent state seamlessly passes down
                    as props across multiple child components.
                </p>
            </section>

            <div className="props-container">
                {/* Controller Bar */}
                <div className="controls-card">
                    <h3>⚙️ Interactive Props Controller</h3>
                    <div className="controls-grid">
                        <div className="control-group">
                            <label>User Name:</label>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="control-group">
                            <label>Batch Round:</label>
                            <input
                                type="number"
                                value={round}
                                onChange={(e) => setRound(Number(e.target.value))}
                            />
                        </div>

                        <div className="control-group toggle-group">
                            <label>Auth Status:</label>
                            <button
                                className={`toggle-btn ${isLoggedIn ? "logged-in" : "logged-out"}`}
                                onClick={() => setIsLoggedIn(!isLoggedIn)}
                            >
                                {isLoggedIn ? "🟢 Logged In" : "🔴 Logged Out"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="demo-grid">
                    <div className="demo-card">
                        <div className="card-badge">Component 1</div>
                        <div className="card-content">
                            <Prop name="React" round={round} isLogIn={isLoggedIn} />
                        </div>
                    </div>

                    <div className="demo-card">
                        <div className="card-badge">Component 2</div>
                        <div className="card-content">
                            <Greet name={userName} />
                        </div>
                    </div>

                    <div className="demo-card">
                        <div className="card-badge">Component 3</div>
                        <div className="card-content">
                            <Greeting name={userName} age={25} isloggedIn={isLoggedIn} />
                        </div>
                    </div>

                    {/* Component 4 (Array Props + Add Trainee) */}
                    <div className="demo-card full-width">
                        <div className="card-badge">Component 4 (Array Props)</div>
                        <div className="card-content">
                            <Trainee trainees={trainees} />

                            <form onSubmit={handleAddTrainee} className="add-trainee-form">
                                <input
                                    type="text"
                                    placeholder="Trainee Name"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Age"
                                    value={ageInput}
                                    onChange={(e) => setAgeInput(e.target.value)}
                                    required
                                    min="1"
                                />
                                <button type="submit">+ Add Trainee</button>
                            </form>
                        </div>
                    </div>

                    <div className="demo-card full-width">
                        <div className="card-badge">Component 5 (Style Props)</div>
                        <div className="card-content">
                            <Container
                                style={{
                                    backgroundColor: isLoggedIn ? "#10b981" : "#193b80",
                                    color: "white",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    padding: "20px",
                                    borderRadius: "8px",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                Custom Styled Container — Active State: {isLoggedIn ? "ONLINE" : "OFFLINE"}
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Propsdata;