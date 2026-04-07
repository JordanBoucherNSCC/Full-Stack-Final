import Banner from '../components/StoreFrontComponents/Banner'
import './Storefront.scss'

function Storefront({ items }) {
    return (
        <div className="storefront">
        <Banner />
            <div className="item-grid">
                {items.map(item => (
                <div key={item.id} className="item-card">
                    <h3>{item.title}</h3>
                    <p><strong>Category:</strong> {item.category_name}</p>
                    <p>{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Storefront