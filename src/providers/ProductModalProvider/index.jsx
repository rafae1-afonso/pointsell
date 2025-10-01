import { useState } from "react";
import { ProductModalContext } from "../../contexts/ProductModalContext";

export const ProductModalProvider = ({ children }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(0);

    return (
        <ProductModalContext.Provider value={{
            modalVisible,
            setModalVisible,
            productInfo,
            setProductInfo,
            page,
            setPage,
        }}>
            {children}
        </ProductModalContext.Provider>
    )
}

export default ProductModalProvider;