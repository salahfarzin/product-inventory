import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import http from "../../api/http";
import {showAlert} from "../../util";
import {useAppDispatch} from "../../store";
import {setProductList} from "./productSlice";
import ProductList from "./ProductList";
import Loader from "../loader/Loader";
import {useSelector} from "react-redux";
import {RootState} from "../../rootReducer";

type Inputs = {
    productFiles: FileList
};

const SUPPORTED_FORMATS = [
    "text/xml",
    "text/csv",
    "application/xml",
    "application/csv",
];

// validate form
const schema = yup.object().shape({
    productFiles: yup
        .mixed()
        .required("You have to provide a file")
        // .test(
        //     "fileFormat",
        //     "please select valid files with extension xml and csv",
        //     values => values.map(file => file && SUPPORTED_FORMATS.includes(file.mimetype)),
        // )
});

function Product() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, errors} = useForm<Inputs>({resolver: yupResolver(schema)});

    const productList = useSelector(
        (state: RootState) => state.product.productList
    );

    useEffect(() => {
        if (!productList) {
            setLoading(true);
            http.get('/product/history')
                .then(res => res && res.data && dispatch(setProductList(res.data.files)))
                .catch()
                .finally(() => setLoading(false));
        }
    }, []);

    const onSubmit = handleSubmit((data) => {
        const formData = new FormData()
        for (let x = 0; x < data.productFiles.length; x++) {
            formData.append('productFiles', data.productFiles[x])
        }

        setLoading(true);
        http.put('/product/upload', formData)
            .then(res => {
                if (res && res.data) {
                    dispatch(setProductList(res.data.files));
                    showAlert("files uploaded successfully", 'success');
                }
            })
            .catch()
            .finally(() => setLoading(false));
    });

    return (
        <div className="container">
            {loading && <Loader/>}
            <div className="card">
                <form onSubmit={onSubmit}>
                    <div>Select a file to upload:</div>
                    <input type="file" ref={register} name="productFiles" className="form-control" multiple/>
                    <button type={"submit"} className="mt-5" disabled={loading}>
                        Submit
                    </button>
                    {errors.productFiles && <div className="error">{errors.productFiles.message}</div>}
                </form>
                <div className="mt-5">
                    <ProductList/>
                </div>
            </div>
        </div>
    );
}

export default Product;
