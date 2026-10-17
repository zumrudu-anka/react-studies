import { useRef, useEffect, useState } from "react";
import dummyImage from "../assets/image/dummy-image-square.jpg";

export default function Home() {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [barcode, setBarcode] = useState(null);
    const [product, setProduct] = useState({});
  
    const openCam = () => {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: {
            min: 1280,
          },
          height: {
            min: 720,
          },
          facingMode : {
            exact : "environment"
          },
          frameRate : 30
        }
      }).then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
  
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
  
        const barcodeDetector = new window.BarcodeDetector({
          formats : [
            "qr_code",
            "ean_13"
          ]
        });
  
        setInterval(() => {
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
          barcodeDetector.detect(canvas)
          .then(([data]) => {
            if(data){
              setBarcode(data.rawValue);
            }
          })
          .catch(error => console.log(error));
        }, 100);
  
      }).catch(error => {
        console.error(error);
      })
    }
  
    useEffect(() => {
        if(barcode){
            fetch(`https://za-barcode-scanner-api.herokuapp.com/product/get/${barcode}`)
            .then(response => response.json())
            .then(data => {
              setProduct(data);
            })
            .catch(_ => setProduct({
              name : "Not Found",
              barcode : "Not Found",
              price : "Not Found"
            }));
        }
        
    }, [barcode]);

    return (
        <>
            <header>
                <h1>Barcode Scanner With React</h1>
                <span id={"info"}>ℹ</span>
            </header>
            <div className = {"camera-area"}>
                <video ref = {videoRef} autoPlay muted hidden/>
                <canvas id = {"barcode-scanner-canvas"} ref = {canvasRef}></canvas>
            </div>
            <button id = {"open-cam-button"} onClick = {openCam}>Open the Camera</button>
            <div id="product-area">
                {product && product.image ? 
                <img src={product.image} alt="Not Found" />
                :
                <img src={dummyImage} alt="Not Found" />
                }
                <div className="info">
                <div className = "feature-area">
                    <div className = "title">
                    Name
                    </div>
                    <div className="value">
                    {product && product.name}
                    </div>
                </div>
                <div className = "feature-area">
                    <div className = "title">
                    Barcode
                    </div>
                    <div className="value">
                    {product && product.barcode}
                    </div>
                </div>
                <div className = "feature-area">
                    <div className = "title">
                    Price
                    </div>
                    <div className="value">
                    {product && product.price}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
