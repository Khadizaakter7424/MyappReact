type TraineeItem = {
    name: string;
    age: number;
};

type TraineeProps = {
    trainees: TraineeItem[];
};

export const Trainee = ({ trainees }: TraineeProps) => {
    return (
        <div style={{ width: "100%" }}>
            <h3 style={{ margin: "0 0 14px", color: "#193b80", fontSize: "18px" }}>
                Trainee List ({trainees.length})
            </h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "10px",
                    marginBottom: "16px",
                }}
            >
                {trainees.map((t, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "6px",
                            padding: "10px 14px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontWeight: 600, color: "#1e293b", fontSize: "14px" }}>
                            {t.name}
                        </span>
                        <span
                            style={{
                                background: "#e0edff",
                                color: "#193b80",
                                fontSize: "12px",
                                fontWeight: "bold",
                                padding: "2px 8px",
                                borderRadius: "12px",
                            }}
                        >
                            {t.age} yrs
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};