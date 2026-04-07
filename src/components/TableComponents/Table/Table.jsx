import './Table.scss'
import TableRow from '../TableRow/TableRow.jsx'

const Table = props => {
    const _editEntry = entry => {
        props.onEditEntry(entry)
    }

    const _deleteEntry = entry => {
        props.onDeleteEntry(entry)
    }

    return(
        <div className='Table-Component'>
            <table>
                <thead>
                    <tr>
                        {props.columns.map(col => <th key={col.field}>{col.label}</th>)}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.entries.map((entry, i) => (
                        <TableRow key={i} index={i} entry={entry} columns={props.columns} onEditEntry={_editEntry} onDeleteEntry={_deleteEntry} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
