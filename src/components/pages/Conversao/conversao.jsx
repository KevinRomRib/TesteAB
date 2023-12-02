import { useEffect, useState } from "react";
import compraService from "../../../services/compra";
import AcessoService from "../../../services/acesso";
import Loading from "../../Loading/loading";
import ConversionRateChart from "../../Grafico/ConversionRateChart";
import AccessesComponent from "../../Grafico/AccessesComponent";
import PurchasesComponent from "../../Grafico/PurchasesComponent";
import styled from "styled-components";

function PaginaConversao() {
    const [dadosCompras, setDadosCompras] = useState({});
    const [dadosAcessos, setDadosAcessos] = useState({});
    const [loading, setLoading] = useState(true);

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 20%;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const Grafico = styled.div`
        width: 70%;
        padding: 20px;
        background-color: #f3f4f6;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        /* margin: 20px; */
    `;

    const ContainerPagina = styled.div`
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100vh;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
    `;

    const getDados = async () => {
        try {
            setLoading(true);
            const resCompras = await compraService.dados();
            const resAcessos = await AcessoService.dados();

            if (resCompras?.status === 200 && Array.isArray(resCompras.data)) {
                setDadosCompras(resCompras.data);
            }

            if (resAcessos?.status === 200 && Array.isArray(resAcessos.data)) {
                setDadosAcessos(resAcessos.data);
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        getDados();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (Array.isArray(dadosCompras) && Array.isArray(dadosAcessos)) {
        return (
            <ContainerPagina>
                <Grafico>
                    <ConversionRateChart accesses={dadosAcessos} purchases={dadosCompras} />
                </Grafico>
                <Container>
                    <AccessesComponent accesses={dadosAcessos} />
                    <PurchasesComponent purchases={dadosCompras} />
                </Container>
            </ContainerPagina>
        );
    } else {
        // Lidar com o caso em que os dados não são arrays
        return <div>Erro: Dados não são válidos.</div>;
    }
}

export default PaginaConversao;
