import React, { useState, useEffect } from 'react';
import { AssessmentService } from '../shared/services/assessment.service';
import { useTable, useSortBy, useFilters } from 'react-table';

export function AssessmentList(){
    
    const [columnsArray, setColumnsArray] = useState([]);

    useEffect(function fetch() {
            (async function() {
                const resData = await AssessmentService.retrieveAll();
                const columnedData = []
                resData.data.forEach(assessment => {
                    columnedData.push(
                        {
                            col1: assessment.cat_name,
                            col2: assessment.cat_date_of_birth,
                            col3: assessment.instrument,
                            col4: assessment.risk_level,
                            col5: assessment.score+'',
                            col6: assessment.created_at,
                        })
                });
                setColumnsArray(columnedData);
            })();
          },[]);
    
    //for now this is an 'inline' component
    const columnFilter = ({column}) => {
        const {filterValue, setFilter} = column;
        return(
            <span> 
                <input 
                    placeholder='search'
                    value={filterValue || ''} 
                    //Enables the value of the input to change by the user
                    onChange={(event)=> setFilter(event.target.value)}
                    style={{textAlign:'center'}} 
                /> 
            </span>);
    };
        
    const data = React.useMemo(() => columnsArray,[columnsArray]);
    console.log(data);
    const columns = React.useMemo(
    () => [
        {
        Header: 'Name',
        accessor: 'col1',// accessor is the "key" in the data
        sortType: 'basic',
        Filter: columnFilter
        },          
        {
        Header: 'Date of Birth',
        accessor: 'col2',
        sortType: 'basic',
        Filter: columnFilter
        }, 
        {
        Header: 'Instrument',
        accessor: 'col3', 
        sortType: 'basic',
        Filter: columnFilter
        },
        {
        Header: 'Risk Level',
        accessor: 'col4',
        sortType: 'basic',
        Filter: columnFilter
        },          
        {
        Header: 'Score',
        accessor: 'col5',
        sortType: 'basic',
        Filter: columnFilter
        },
        {
        Header: 'Created at',
        accessor: 'col6',
        sortType: 'basic', 
        Filter: columnFilter
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
    } = useTable({ columns, data },useFilters,useSortBy);

    const table =     
    <div className="container">
        <div className="row justify-content-md-center">
            <table 
                {...getTableProps()} 
                style={{
                        textAlign:'center',
                    }}    
            >
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                            {column.render('Header')}
                            <span role="img" aria-label="up and down arrows">
                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                            </span>
                        </th>
                        ))}
                    </tr>
                    ))}
                    {/* separating between filtering and sort (toggling) */}
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th>
                            <div>{column.canFilter? column.render('Filter'): null}</div>
                        </th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody 
                    {...getTableBodyProps()}
                    style={{
                        textAlign:'center',
                    }} 
                >
                    {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                            <td
                                {...cell.getCellProps()}
                                style={{
                                    padding: '10px 25px',
                                    border: 'solid 1px gray',
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
    </div>;

    let beforeDataTable = <div>hello </div>;
    let returnValue =columnsArray.length>0? table:beforeDataTable;
    
    return (
        returnValue
    );
}
