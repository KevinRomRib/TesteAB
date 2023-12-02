import { useEffect, useState } from "react";
import PageA from "../PageA/PageA";
import Navbar from "../../NavBar/navbar";
import PageB from "../PageB/PageB";
import userService from "../../../services/user";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/loading";
import NotFoundPage from "../../NotFound/notfound";
import ShoppingCart from "../../OffSideCarrinho/offside";
import { Field } from "../../Field/Field";
import compraService from "../../../services/compra";
import { toast } from "react-toastify";

function BasePage() {
    const [state, setState] = useState(null);
    const [userdata, setUserdata] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [compraJaRealizada, setCompraJaRealizada] = useState(false);

    // Função para adicionar um produto ao carrinho
    const addToCart = (product) => {
        const productExists = cartItems.find(item => item.id === product.id);

        if (productExists) {
            // Se o produto já existe, aumentar a quantidade
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            // Se o produto não existe, adicioná-lo ao carrinho
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }

        toast("Adicionado ao carrinho!", { type: 'success' })
    };

    const removeFromCart = (productToRemove) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === productToRemove.id);

            if (existingItem.quantity > 1) {
                return currentItems.map(item =>
                    item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return currentItems.filter(item => item.id !== productToRemove.id);
            }
        });
    };

    const limparCarrinho = () => {
        setCartItems([])
    }

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

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

    const comprar = async () => {
        try {
            const compra = await compraService.cadastrar({ idUsuario: userdata.id, page: state== "masculino" ? 'a' : 'b' })
            if (compra.status === 200) {
                toast("Comprado com sucesso!", { type: 'success' })
            }
        } catch (error) {
            toast("Erro ao comprar!", { type: 'error' })
        } finally {
            setCompraJaRealizada(true)
            limparCarrinho()
            setIsOpen(false)
        }
    }

    useEffect(() => {
        getGenero();
    }, [id]);

    return (
        <Field>
            <Navbar tipo={state} Cart={toggleCart} />
            <ShoppingCart opened={isOpen} cartClose={toggleCart} cartItems={cartItems} removeCart={removeFromCart} comprar={comprar} compraRealizada={compraJaRealizada} />
            {state == null ? (
                <Loading />
            ) : state == "masculino" ? (
                <PageA user={userdata} addCart={addToCart} limparCarrinho={limparCarrinho} />
            ) : state == "feminino" ? (
                <PageB user={userdata} addCart={addToCart} limparCarrinho={limparCarrinho} />
            ) : (
                <NotFoundPage />
            )}
        </Field>
    );
}

export default BasePage;