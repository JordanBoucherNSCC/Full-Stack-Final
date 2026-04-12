import { useState } from 'react';
import Button from '../../ButtonComponents/Button/Button.jsx';
import './ItemAddForm.scss';

const ItemAddForm = props => {
    const { categories, onAddItem } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [category_id, setCategoryId] = useState('');

    return (
        <form
            className="item-add-form"
            onSubmit={(e) => {
                e.preventDefault();
                if (title && description && price && quantity && sku && category_id) {
                    console.log(`onSubmit fired`)
                    console.log({
                        title,
                        description,
                        price: parseFloat(price),
                        quantity: parseInt(quantity),
                        sku,
                        category_id: parseInt(category_id)
                    })
                    onAddItem({
                        title,
                        description,
                        price: parseFloat(price),
                        quantity: parseInt(quantity),
                        sku,
                        category_id: parseInt(category_id)
                    });
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    setQuantity('');
                    setSku('');
                    setCategoryId('');
                }
            }}
        >
            <h3>Add Item</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />

            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>

            <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />

            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />

            <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" required />

            <select value={category_id} onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>

            <Button type="submit">Add Item</Button>
        </form>
    );
}

export default ItemAddForm;
