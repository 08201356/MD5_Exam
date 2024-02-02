import {useDispatch} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import {Button} from "react-bootstrap";
import {addProduct} from "../../redux/service/productService";

export default function Create(){
    const dispatch = useDispatch;
    const navigate = useNavigate;
    return (
        <div>
            <Formik initialValues={{
               title:'',
               price:'',
               description:''
            }}
                    onSubmit={(values) => {
                        dispatch(addProduct(values));
                        alert("Added")
                        navigate("/")
                    }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Product name: </label>
                        <Field name={'title'} type="text" id="name"></Field>
                    </div>
                    <div>
                        <label htmlFor="price">Product price: </label>
                        <Field name={'price'} type="text" id="price"></Field>
                    </div>
                    <div>
                        <label htmlFor="description">Product description: </label>
                        <Field name={'description'} type="textarea" id="description"></Field>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <button className="btn btn-primary"><Link to={'/'}>Return</Link></button>
                </Form>
            </Formik>
        </div>
    )
}