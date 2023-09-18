// imports
import { createContext, useState } from "react";

// create context
export const primaryContext = createContext();

// create provider (add states)
// return providerJSX

const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([]);

    console.log(products);

    return (
        <primaryContext.Provider value={{
            products,
            setProducts
        }}>
                {props.children}
        </primaryContext.Provider>
    )
}

export default PrimaryProvider;