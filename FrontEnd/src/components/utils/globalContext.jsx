import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { useState } from "react"
import { reducer } from "../../reducers/reducer"
export const initialState = {
    productos: [],
    categorias: [],
    theme: "light",
}

const ProductosStates = createContext()

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState()
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    const url = 'http://localhost:8080/'

    useEffect(() => {
        axios.get(url+'producto').then((res)=>{
            setProductos(res.data)
            dispatch({ type: "GET_PRODUCTOS", payload: res.data.content})
        })
    },[])

    useEffect(() => {
        axios.get(url+'producto/categoria').then((res)=>{
            console.log(res)
            setCategorias(res.data)
            dispatch({ type: "GET_CATEGORIAS", payload: res.data})
        })
    },[])

    const toggleTheme = () => {
        dispatch({
          type: "SET_THEME",
          payload: state.theme === "light" ? "dark" : "light",
        });
      };

    return (
        <ProductosStates.Provider value={{state, dispatch, toggleTheme}}>
            {children}
        </ProductosStates.Provider>
    )
}

export default ContextProvider

export const useProductosStates = () => useContext(ProductosStates)