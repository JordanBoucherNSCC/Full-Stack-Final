import CategoryAddForm from '../components/FormComponents/AddForm/CategoryAddForm.jsx';
import CategoryEditForm from '../components/FormComponents/EditForm/CategoryEditForm.jsx';
import Table from '../components/TableComponents/Table/Table.jsx';
import './Categories.scss'

function Categories({ categories, editingCategory, _addCategory, _updateCategory, _deleteCategory, _editCategory}) {
    const columns = [
        { label: 'ID', field: 'id' },
        { label: 'Name', field: 'name' }
    ];

    return (
        <div className="categories-page">
            <h2>Categories</h2>
            {
                editingCategory ? (
                    <CategoryEditForm
                        key={editingCategory?.id ?? 'category-edit'}
                        category={editingCategory}
                        onUpdateCategory={_updateCategory}
                    />
                ) : (
                    <CategoryAddForm onAddCategory={_addCategory} />
                )
            }
            <div className="table-section">
                <Table
                    entries={categories}
                    columns={columns}
                    onEditEntry={_editCategory}
                    onDeleteEntry={_deleteCategory}
                />
            </div>
        </div>
    )
}

export default Categories