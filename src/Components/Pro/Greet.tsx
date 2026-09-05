type GreetProps = {
    name: string;
};

export const Greet = ({ name }: GreetProps) => {
    return <p>Hello, {name}! Welcome to ISDB.</p>;
};
