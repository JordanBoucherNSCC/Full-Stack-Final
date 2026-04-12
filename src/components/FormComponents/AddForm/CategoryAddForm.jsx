import { useState } from 'react';
import Button from '../../ButtonComponents/Button/Button.jsx';
import './CategoryAddForm.scss';

const CategoryAddForm = props => {
    const { onAddCategory } = props;
    const [name, setName] = useState('');

    return (
        <form
            className="category-add-form"
            onSubmit={(e) => {
                e.preventDefault();
                if (name) {
                    console.log(`onSubmit fired`)
                    console.log({ name })
                    onAddCategory({ name });
                    setName('');
                }
            }}
        >
            <h3>Add Category</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Category Name" required />

            <Button type="submit">Add Category</Button>
        </form>
    );
}

export default CategoryAddForm;
