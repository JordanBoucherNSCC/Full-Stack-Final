import './TableRow.scss'
import Button from '../../ButtonComponents/Button/Button.jsx'

const TableRow = props => {
    const _editRowEntry = () => {
        props.onEditEntry(props.entry)
    }

    const _deleteRowEntry = () => {
        props.onDeleteEntry(props.entry)
    }

    return(
        <tr>
            {props.columns.map(col => (
                <td key={col.field}>{props.entry[col.field]}</td>
            ))}
            <td className="actions-cell">
                <div className="actions-group">
                    <Button onClick={_editRowEntry}>Edit</Button>
                    <Button onClick={_deleteRowEntry}>Delete</Button>
                </div>
            </td>
        </tr>
    )
}

export default TableRow
