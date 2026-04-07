import ItemAddForm from '../components/FormComponents/AddForm/ItemAddForm.jsx';
import ItemEditForm from '../components/FormComponents/EditForm/ItemEditForm.jsx';
import Table from '../components/TableComponents/Table/Table.jsx';
import './Items.scss'

function Items({ items, categories, editingItem, _addItem, _updateItem, _deleteItem, _editItem }) {
    const columns = [
        { label: 'ID', field: 'id' },
        { label: 'Title', field: 'title' },
        { label: 'Description', field: 'description' },
        { label: 'Price', field: 'price' },
        { label: 'Quantity', field: 'quantity' },
        { label: 'SKU', field: 'sku' },
        { label: 'Category', field: 'category_name' }
    ];

    return (
        <div className="items-page">
            <h2>Items</h2>
            {
                editingItem ? (
                    <ItemEditForm
                        key={editingItem?.id ?? 'item-edit'}
                        item={editingItem}
                        categories={categories}
                        onUpdateItem={_updateItem}
                    />
                ) : (
                    <ItemAddForm
                        categories={categories}
                        onAddItem={_addItem}
                    />
                )
            }
            <div className="table-section">
                <Table
                    entries={items}
                    columns={columns}
                    onEditEntry={_editItem}
                    onDeleteEntry={_deleteItem}
                />
            </div>
        </div>
    )
}

export default Items