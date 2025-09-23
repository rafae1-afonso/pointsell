import { useParams } from "react-router";
import styled from "styled-components";
import { produtosAPI } from "../constants";

const PageBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
`;


const ProdutoPage = () => {
    let { id } = useParams();
    const product = produtosAPI.all[--id]

    return (
        <div>{product.nome}</div>
    );
}

export default ProdutoPage