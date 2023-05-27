// Migrated this to react-redux pattern

// import { createContext, useReducer } from "react";

// import { createAction } from "../utils/reducer/reducer.utils";

// export const CartContext = createContext({
//   cartItems: [],
//   isCartVisible: false,
//   cartItemsCount: 0,
//   setIsCartVisble: () => null,
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   totalCartValue: 0,
// });

// const addProductToCart = (cartItems, product) => {
//   // If product is already in cart
//   let isItemExist = false;
//   cartItems.forEach((item) => {
//     if (item.id === product.id) {
//       isItemExist = true;
//       item.quantity++;
//     }
//   });
//   if (isItemExist) {
//     return [...cartItems];
//   }

//   // If cart is not ampty and product is not added alredy OR
//   // if Cart is empty
//   return [...cartItems, { ...product, quantity: 1 }];
// };

// const removeProductFromCart = (cartItems, product, removeProduct) => {
//   // Delete product completely
//   if (removeProduct) {
//     return cartItems.filter((item) => {
//       if (item.id !== product.id) {
//         return true;
//       }
//       return false;
//     });
//   }

//   // Reduce quantity of product
//   cartItems.forEach((item) => {
//     if (item.id === product.id) {
//       item.quantity--;
//     }
//   });
//   return [...cartItems];
// };

// const CART_ACTIONS_TYPE = {
//   SET_CART_ITEM: "SET_CART_ITEM",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const INITIAL_STATE = {
//   isCartVisible: false,
//   cartItems: [],
//   cartItemsCount: 0,
//   totalCartValue: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTIONS_TYPE.SET_CART_ITEM:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartVisible: !state.isCartVisible,
//       };
//     default:
//       throw new Error(`Unhandeled type of ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   // const [cartItems, setCartItems] = useState([]);
//   // const [isCartVisible, setIsCartVisble] = useState(false);
//   // const [cartItemsCount, setCartItemsCount] = useState(0);
//   // const [totalCartValue, setTotalCartValue] = useState(0);

//   // useEffect(() => {
//   //   const newCartCount = cartItems.reduce(
//   //     (acc, item) => acc + item.quantity,
//   //     0
//   //   );
//   //   setCartItemsCount(newCartCount);
//   // }, [cartItems]);

//   // useEffect(() => {
//   //   const totalCartValueCount = cartItems.reduce(
//   //     (total, item) => total + item.price * item.quantity,
//   //     0
//   //   );
//   //   setTotalCartValue(totalCartValueCount);
//   // }, [cartItems]);

//   const [
//     { cartItems, isCartVisible, cartItemsCount, totalCartValue },
//     dispatch,
//   ] = useReducer(cartReducer, INITIAL_STATE);

//   const updateCartItemReducer = (cartItemsToSet) => {
//     const newCartCount = cartItemsToSet.reduce(
//       (acc, item) => acc + item.quantity,
//       0
//     );

//     const newTotalCartValueCount = cartItemsToSet.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTIONS_TYPE.SET_CART_ITEM, {
//         cartItems: cartItemsToSet,
//         cartItemsCount: newCartCount,
//         totalCartValue: newTotalCartValueCount,
//       })
//     );

//     /*

//   dispatch new action with payload = {
//     newCartItems,
//     newCartTotal,
//     newTotalCartValue
//   }

//   */
//   };

//   const setIsCartVisble = () => toggleCartVisibilityReducer();

//   const toggleCartVisibilityReducer = () => {
//     dispatch(createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, {}));
//   };

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addProductToCart(cartItems, productToAdd);
//     updateCartItemReducer(newCartItems);
//   };

//   const removeItemFromCart = (product, removeProduct) => {
//     const newCartItems = removeProductFromCart(
//       cartItems,
//       product,
//       removeProduct
//     );
//     updateCartItemReducer(newCartItems);
//   };

//   const value = {
//     cartItems,
//     isCartVisible,
//     addItemToCart,
//     setIsCartVisble,
//     cartItemsCount,
//     removeItemFromCart,
//     totalCartValue,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
