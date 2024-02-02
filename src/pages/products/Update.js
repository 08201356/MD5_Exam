import {useDispatch} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";

export default function Update(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:3000/products/` + id)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const [productData, setProductData] = useState({
        title: '',
        price: '',
        description: ''
    });
    return(
        <div>
            <Formik initialValues={{
                title: productData.title,
                price: productData.price,
                description: productData.description
            }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:3000/products/` + id, values).then(r => {
                            alert("Updated")
                            navigate('/')
                        })
                    }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product name: </label>
                        <Field name={'title'} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Product price:</label>
                        <Field name={'price'} type="text" className="form-control" id="price"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Product description: </label>
                        <Field name={'description'} type="text" className="form-control" id="description"></Field>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <Button type="button" className="btn btn-info"><Link to={'/'} className="card-link">Return</Link></Button>
                </Form>
            </Formik>
        </div>
    )
}