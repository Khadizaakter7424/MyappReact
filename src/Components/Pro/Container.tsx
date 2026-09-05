import type { CSSProperties, ReactNode } from "react";

type ContainerProps = {
    style?: CSSProperties;
    children?: ReactNode;
};

const Container = ({ style, children }: ContainerProps) => {
    return (
        <div style={style}>
            {children ?? "This box's look comes entirely from the style prop."}
        </div>
    );
};

export default Container;
