import React, { Component } from 'react';
import _ from "lodash";

//Interface
class TableBody extends Component {
    renderCell = (item, column) => {
        if(column.content) return column.content(item);
        return _.get(item, column.path)
    }
    render() { 
        const {data, columns} = this.props;
        return ( 
            <tbody>
                {data.map(item => (<tr key={item._id}>
                    {columns.map(c => (<td key={this.createKey(item, c)}>{this.renderCell(item, c)}</td>))}
                </tr>))}
            </tbody>
        );
    }

    createKey = (item, column)  => {
        return  (item._id + (column.path || column.key));
    }

}
 
export default TableBody;