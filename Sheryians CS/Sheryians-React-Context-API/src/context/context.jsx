import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
    const [users, setUsers] = useState([
        { id: 0, username: 'Shubham Sharma', country: 'India' },
        { id: 1, username: 'Stephen Curry', country: 'America' },
        { id: 2, username: 'Mikhail Da', country: 'Moldova' },
    ]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Context;