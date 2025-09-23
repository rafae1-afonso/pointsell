import { useContext } from "react";
import { ProductModalContext } from "../contexts/ProductModalContext";

export const useProductModalContext = () => {
    const {
        modalVisible
    } = useContext(ProductModalContext);
    console.log(modalVisible)
    return 
}