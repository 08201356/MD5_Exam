import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {deleteProduct, getProduct} from "../../redux/service/productService";

export default function List(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const  products = useSelector( state => {
        return Array.from(state.products.products)
    })

    const handleDelete = (idProduct) => {
        // Dispatch action logout
        dispatch(deleteProduct(idProduct))
        navigate('/')
    };
    return (
        <div className={'row'}>
            <div className="col-12">
                <h2 style={{textAlign: 'center'}}>Product List</h2>
                <Link to={"/createProduct"}><button className="btn btn-success">+ Add</button></Link>
                <table className="table table-striped" style={{marginTop: '16px'}}>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products?.map((item, index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td><Link to={`/detailProduct/${item.id}`}>{item.title}</Link></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <ConfirmDeleteComponent
                                    onDelete={handleDelete}
                                    id={item.id}
                                />
                            </td>
                            <td><Link to={'/editProduct/' + item.id}><button type="button" className="btn btn-primary">Submit</button></Link></td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}