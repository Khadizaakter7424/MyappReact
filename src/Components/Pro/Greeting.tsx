type GreetingProps = {
    name: string;
    age: number;
    isloggedIn: boolean;
};

const Greeting = ({ name, age, isloggedIn }: GreetingProps) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {isloggedIn ? "Online" : "Offline"}</p>
        </div>
    );
};

export default Greeting;
