import { useState } from 'react';
import Button from '../../ButtonComponents/Button/Button.jsx';
import './CategoryEditForm.scss';

const CategoryEditForm = props => {
    const { category, onUpdateCategory } = props;
    const [name, setName] = useState(category?.name || '');

    return (
        <form
            className="category-edit-form"
            onSubmit={(e) => {
                e.preventDefault();
                if (name) {
                    console.log(`onSubmit fired`)
                    console.log({ ...category, name })
                    onUpdateCategory({ ...category, name });
                }
            }}
        >
            <h3>Edit Category</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Category Name" required />

            <Button type="submit">Update Category</Button>
        </form>
    );
}

export default CategoryEditForm;
