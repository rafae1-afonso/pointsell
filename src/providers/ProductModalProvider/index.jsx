import { useState } from "react";
import { ProductModalContext } from "../../contexts/ProductModalContext";

export const ProductModalProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [productInfo, setProductInfo] = useState({})

    return (
        <ProductModalContext.Provider value={{
            modalVisible,
            setModalVisible,
            productInfo,
            setProductInfo,
        }}>
            {children}
        </ProductModalContext.Provider>
    )
}

export default ProductModalProvider;