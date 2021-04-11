import React, {useContext} from "react";
import { UserContext } from "../UserContext";

const Index = () => {
    // the values of vale and setValue were passed in from the App component
    const {value, setValue} = useContext(UserContext);

    return (
        <div>
            <h2>Index</h2>
            <div>{value}</div>
            <button onClick={() => setValue("Hello")}>Click me</button>
        </div>
    );
}

export default Index;