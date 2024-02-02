import {useDispatch, useSelector} from "react-redux";
import {findProductByID} from "../../redux/service/productService";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(findProductByID(id))
    }, [])
    const product = useSelector(state => {
        return state.products.products;
    })
    return(
        <div>
            <div><p>Product Detail</p></div>
            <div>
                <h3>Product name: {product.title}</h3>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p onClick={() => {
                    navigate('/')
                }}><button type='button' className="btn btn-primary">Return</button></p>
            </div>
        </div>
    )
}