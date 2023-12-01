import { useEffect, useState } from "react";
import compraService from "../../../services/compra";
import GraficoCompras from "../../Grafico/grafico";
import Loading from "../../Loading/loading";
import styled from "styled-components";
import AcessoService from "../../../services/acesso";

const H1 = styled.h1`
    text-align: center;
    margin: 20px;
    width: 100%;
`;

const DIV = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const H5 = styled.h5`
    text-align: center;
    margin: 20px;
    width: 100%;
`;


function PaginaConversao() {
    const [dados, setDados] = useState({});
    const [dadosAcss, setDadosAcss] = useState({});
    const [loading, setLoading] = useState(true);
    const [conversaoA, setConversaoA] = useState('');
    const [conversaoB, setConversaoB] = useState('');

    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
    };
    function calcularTaxaConversao(visitas, compras) {
        if (visitas.length !== compras.length) {
            throw new Error('Os arrays de visitas e compras devem ter o mesmo tamanho.');
        }

        let taxasDeConversao = [];

        for (let i = 0; i < visitas.length; i++) {
            if (visitas[i] === 0) {
                // Evita divisão por zero
                taxasDeConversao.push(0);
            } else {
                let taxa = (compras[i] / visitas[i]) * 100;
                taxasDeConversao.push(taxa);
            }
        }

        return taxasDeConversao;
    }


    // Agrupar e contar os dados
    const dadosAgrupados = (dados) => {
        var a = dados.reduce((acc, val) => {
            const dataFormatada = formatarData(val.data);
            const tipoPagina = val.page;

            if (!acc[dataFormatada]) {
                acc[dataFormatada] = { a: 0, b: 0 };
            }
            acc[dataFormatada][tipoPagina]++;

            return acc;
        }, {})

        return a;
    };

    const getDados = async () => {
        setLoading(true);
        const dados = await compraService.dados();
        if (dados?.status === 200) {
            const dadosCertos = dadosAgrupados(dados.data);
            console.log(dadosCertos);
            setDados(dadosCertos);
        }
        setLoading(false);
    }

    const getdadosAcss = async () => {
        setLoading(true);
        const dados = await AcessoService.dados();
        if (dados?.status === 200) {
            const dadosCertos = dadosAgrupados(dados.data);
            console.log(dadosCertos);
            setDadosAcss(dadosCertos);
        }
        setLoading(false);
    }

    const TaxaConversaoA = () => {
        const visitas = Object.keys(dadosAcss).map(data => dadosAcss[data].a || 0);
        const compras = Object.keys(dados).map(data => dados[data].a || 0);
        const taxas = calcularTaxaConversao(visitas, compras);
        return taxas;
    }

    const TaxaConversaoB = () => {
        const visitas = Object.keys(dadosAcss).map(data => dadosAcss[data].b || 0);
        const compras = Object.keys(dados).map(data => dados[data].b || 0);
        const taxas = calcularTaxaConversao(visitas, compras);
        return taxas;
    }

    useEffect(() => {
        getDados();
        getdadosAcss();
        const taxaA = TaxaConversaoA();
        const taxaB = TaxaConversaoB();
        setConversaoA(taxaA);
        setConversaoB(taxaB);
    }, []);

    return (
        <div>
            {loading ? <Loading /> :
                <DIV>
                    <Container>
                        <H1>Acessos</H1>
                        <GraficoCompras dadosAgrupados={dadosAcss} key={'acessos'} />
                        <H5>Taxa de ConversãoA: {conversaoA}</H5>
                    </Container>
                    <Container>

                        <H1>Compras</H1>
                        <GraficoCompras dadosAgrupados={dados} key={'compras'} />
                        <H5>Taxa de Conversãob: {conversaoB}</H5>

                    </Container>

                </DIV>
            }
        </div>
    );
}

export default PaginaConversao;