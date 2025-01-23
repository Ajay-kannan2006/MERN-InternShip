import { useEffect, useState } from "react";
import axios from 'axios';
import './TaskAPi.css'
const TaskAPI = () => {
    var [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => { console.log(err); })
    }, []);
    return (
        <><h2>This is the image API</h2>
            <div className="image-container">

                {products.map((product) => (
                    <div className="image-card" >
                        <img src={product.image} key={product.id} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default TaskAPI;