// imports
import { createContext, useState } from "react";

// create context
export const primaryContext = createContext();

// create provider (add states)
// return providerJSX

const PrimaryProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log({cart});
    // let exampleObject = {
    //     product: {},
    //     number: 3
    // }

    return (
        <primaryContext.Provider value={{
            products,
            setProducts,
            cart, 
            setCart
        }}>
                {props.children}
        </primaryContext.Provider>
    )
}

export default PrimaryProvider;