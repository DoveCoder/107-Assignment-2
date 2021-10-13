import QuantityPicker from "./quantityPicker";
import "./item.css";

const Item = () => {

    const handleAdd = () => {
        console.log("Adding item to cart");
    }

    return (
        <div className="item">

            <h5> Title Here </h5>

            <label> $ Total </label>
            <label> $Price </label>

            <img src="https://picsum.photos/200/300" alt="Product" />

            <div className="controls">
                <QuantityPicker />
                <button onClick={handleAdd} className="btn btn-sm btn-dark add-btn"> Add </button>
            </div>
        </div>
    );
}

export default Item;