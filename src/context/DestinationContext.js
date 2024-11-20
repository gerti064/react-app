import { createContext, useState } from 'react';

const DestinationContext = createContext();

const DestinationProvider = ({ children }) => {
    const [destinations, setDestinations] = useState([]);

    return (
        <DestinationContext.Provider value={{ destinations, setDestinations }}>
            {children}
        </DestinationContext.Provider>
    );
}

export { DestinationProvider, DestinationContext };
