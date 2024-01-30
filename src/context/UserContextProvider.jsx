import React from "react";


const UserContextProvider   =({children}) => {
    const [quantity,setQuantity]=React.useState();
    const [cartItem,setCartItem]=React.useState();
    return(
        <UserContext.Provider value={{quantity,setQuantity,cartItem,setCartItem}}>
            {children}
        </UserContext.Provider>
    )
};
export default UserContextProvider;