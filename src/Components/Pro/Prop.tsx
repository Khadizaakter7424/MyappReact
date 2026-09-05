type PropProps = {
    name: string;
    round: number;
    isLogIn: boolean;
};

const Prop = (pr: PropProps) => {
    return (
        <div>
            <h4>Course: {pr.name}</h4>
            <p>Round: {pr.round}</p>
            <p>{pr.isLogIn ? "User is logged in" : "User is not logged in"}</p>
        </div>
    );
};

export default Prop;
