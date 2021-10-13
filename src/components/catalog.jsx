import Item from "./item";
import "./catalog.css"

const Catalog = () => {
    return (
        <div>
            <h3> My Catalog</h3>
            <div className="catalog">
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        </div>
        
        
    );
}

export default Catalog;