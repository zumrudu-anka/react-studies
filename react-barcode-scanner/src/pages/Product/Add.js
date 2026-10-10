import { useRef } from 'react'

export default function AddProduct() {
    
    const nameInput = useRef(null);
    const barcodeInput = useRef(null);
    const priceInput = useRef(null);
    const imageInput = useRef(null);
    
    const chooseFile = () => {
        imageInput.current.click();
    }

    const submitForm = () => {
        const name = nameInput.current.value;
        const barcode = barcodeInput.current.value;
        const price = priceInput.current.value;
        const image = imageInput.current.files[0];
        
        fetch("https://za-barcode-scanner-api.herokuapp.com/product/create", {
            method : "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                name,
                barcode,
                price,
                image
            })
        }).then(response => console.log(response));
    }

    return (
        <div id = "add-product">
            Add Product Form
            <input type="text" placeholder = {"Name"} ref = {nameInput}/>
            <input type="text" placeholder = {"Barcode"} ref = {barcodeInput}/>
            <input type="number" placeholder = {"Price"} min = "1" ref = {priceInput}/>
            <button id = "select-image-button" onClick = {chooseFile}>
                Select an Image
                <input ref = {imageInput} type="file" id = "file-input"/>
            </button>
            <button onClick = {submitForm}>Add</button>
        </div>
    )
}
