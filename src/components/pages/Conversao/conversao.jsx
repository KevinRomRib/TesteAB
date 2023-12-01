import { useEffect, useState } from "react";
import compraService from "../../../services/compra";
import GraficoCompras from "../../Grafico/grafico";
import Loading from "../../Loading/loading";

function PaginaConversao() {
    const [dados, setDados] = useState({});
    const [loading, setLoading] = useState(true);
    const formatarData = (dataString) => {
        const data = new Date(dataString);
        return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
    };

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
        const dados = await compraService.dados();
        if (dados?.status === 200) {
            const dadosCertos = dadosAgrupados(dados.data);
            console.log(dadosCertos);
            setDados(dadosCertos);
        }
        setLoading(false);
    }

    useEffect(() => {
        getDados();
    }, []);

    return (
        <div>
            {loading ? <Loading /> :
                <GraficoCompras dadosAgrupados={dados} key={'a'} />
            }
        </div>
    );
}

export default PaginaConversao;