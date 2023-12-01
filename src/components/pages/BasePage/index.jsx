import { useEffect, useState } from "react";
import PageA from "../PageA/PageA";
import PageB from "../PageB/PageB";
import userService from "../../../services/user";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/loading";
import NotFoundPage from "../../NotFound/notfound";
function BasePage() {
    const [state, setState] = useState(null);

    const { id } = useParams();

    const getGenero = async () => {
        const user = await userService.findUser({ id: id });
        if (user?.status === 200) {
            setState(user.data.genero);
        } else {
            setState("404")
        }
    };
    useEffect(() => {
        getGenero();
    }, []);

    return (
        <>
            {state == null ? (
                <Loading />
            ) : state == "masculino" ? (
                <PageA />
            ) : state == "feminino" ? (
                <PageB />
            ) : (
                <NotFoundPage />
            )}
        </>
    );
}

export default BasePage;