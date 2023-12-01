import { useEffect, useState } from "react";
import PageA from "../PageA/PageA";
import PageB from "../PageB/PageB";
import userService from "../../../services/user";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/loading";
import NotFoundPage from "../../NotFound/notfound";
import { set } from "mongoose";
function BasePage() {
    const [state, setState] = useState(null);
    const [userdata, setUserdata] = useState(null);

    const { id } = useParams();

    const getGenero = async () => {
        const user = await userService.findUser({ id: id });
        if (user?.status === 200) {
            setState(user.data.genero);
            setUserdata(user.data);
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
                <PageA user={userdata} />
            ) : state == "feminino" ? (
                <PageB user={userdata} />
            ) : (
                <NotFoundPage />
            )}
        </>
    );
}

export default BasePage;