import React, { useState, useMemo, useCallback } from "react";
import ArticleContentDb from './ArticleContentDb';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ArticleListManagement = () => {
    const articles = ArticleContentDb();

    const cellClickedListener = useCallback( event => {
        //console.log('cellClicked', event);
        console.log('cellClicked', event.data.title);
        // if (event.colDef.field === "title" || event.colDef.field === "name") {
        //     console.log('cellClicked', event.colDef.field);
        //     alert("Id: " + event.data._id)
        // }
    }, []);

    const defaultColDef = useMemo( ()=> ({
        sortable: true
    }));

    const deleteButtonRender = p => <Link to={`/articles_delete/${p.data.name}`}>Delete</Link>;
    // const testEdit = (event) => {
    //     return (
    //         <Link to={`/articles/${event.data.name}/${event.data.title}/${event.data.content}`}>{event.data.name}</Link>
    //     )
    // }
    const editLinkRender = p => <Link to={`/articles/${p.data.name}/${p.data.title}/${p.data.content}`}>{p.data.name}</Link>;
    

    // enables pagination in the grid
    const pagination = true;

    // sets 2 rows per page (default is 100)
    const paginationPageSize = 10;

    const [columnDefs] = useState([
        { field: 'name', width: 200, checkboxSelection: false, cellRenderer: editLinkRender},
        { field: 'title', width: 300, editable: false, filter: true },
        { headerName: '', field: 'delete', sortable: false, width: 100, cellRenderer: deleteButtonRender }
    ]);  

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <Link to={`/articles/add-article`}>
                <button type="button" className="btn btn-info">Add</button>
            </Link>
            <AgGridReact pagination={pagination} paginationPageSize={paginationPageSize}
                rowSelection='single'
                rowData={articles}
                columnDefs={columnDefs}
                animateRows={true}
                defaultColDef={defaultColDef}
                onCellClicked={cellClickedListener}>
            </AgGridReact>
        </div>
    );
};

export default ArticleListManagement;