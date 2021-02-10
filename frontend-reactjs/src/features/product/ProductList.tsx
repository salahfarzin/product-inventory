import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../rootReducer";

function ProductList() {
    const productList = useSelector(
        (state: RootState) => state.product.productList
    );

    return (
        <div>
            {productList && productList.map((file: any) => [
                <div className="product-row">{file.name} (Size: {file.size})</div>
            ])}
        </div>
    );
}

export default ProductList;
