import { useState, useEffect } from 'react'

export default function ProductList() {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://za-barcode-scanner-api.herokuapp.com/product/list")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div id = "product-list">
            <table border = "1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Barcode</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 ? products.map(product => (
                            <tr key = {product.id}>
                                <td>{product.name}</td>
                                <td>{product.barcode}</td>
                                <td>{product.price}</td>
                            </tr>
                        )) : <tr>
                                <td>X</td>
                                <td>X</td>
                                <td>X</td>
                            </tr>
                    }
                </tbody>
            </table>
            {
                products.length < 1 &&
                <div style = {{
                    fontWeight : "bold",
                    color : "red",
                    fontSize : "2.5vw",
                    textAlign : "center"
                }}>
                    There are no Products
                    <br />
                    You can add products from Add Product button where on the top right
                </div>
            }
        </div>
    )
}
