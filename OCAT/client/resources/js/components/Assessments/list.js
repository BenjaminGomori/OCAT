import React from 'react';
import { AssessmentService } from '../shared/services/assessment.service';
import { useTable } from 'react-table'

export function AssessmentList(){
    
    const getAssessments = async () => {    
        //console.log('11111111111111111111111111111');
        const obj = await AssessmentService.retrieveAll();
        //console.log(obj);
    }
    getAssessments();

    const data = React.useMemo(
    () => [
        {
        col1: 'Hello',
        col2: 'World',
        },
        {
        col1: 'react-table',
        col2: 'rocks',
        },
        {
        col1: 'whatever',
        col2: 'you want',
        },
    ],
    []
    );

    const columns = React.useMemo(
    () => [
        {
        Header: 'Name',
        accessor: 'col1',// accessor is the "key" in the data
        },          
        {
        Header: 'Date of Birth',
        accessor: 'col2',
        }, 
        {
        Header: 'Instrument',
        accessor: 'col3', 
        },
        {
        Header: 'Risk Level',
        accessor: 'col4',
        },          
        {
        Header: 'Score',
        accessor: 'col5',
        },
        {
        Header: 'Created at',
        accessor: 'col6',
        },
    ],
    []
    );

    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = useTable({ columns, data });

    return (
    <div className="container">
        <div className="row justify-content-md-center">
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                        >
                            {column.render('Header')}
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                            <td
                                {...cell.getCellProps()}
                                style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                    background: '',
                                    }}
                            >
                                {cell.render('Cell')}
                            </td>
                            )
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    );
}