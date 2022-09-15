import React from "react";
// import  MaterialTable from 'material-table';
import MaterialTable from "material-table";

// import { TableBody } from "@material-ui/core";
// import { AddBox, ArrowDownward } from "@material-ui/icons";

function SearchTable({t_title, data , columns , searching , sort , filter , paging,headerH,headerC , headerFC ,headerFS , headerFW}) {

  return (
    <div>
      <MaterialTable 
      title={t_title}
      columns={columns}
      data={data}        
      options={{
        search: searching,
        filtering:filter,
        sorting:sort,
        paging:paging,
        padding:'dense',
        // pageSizeOptions: [],
        headerStyle: {
          backgroundColor: headerC,
          height:headerH,
          color: headerFC,
          fontSize: headerFS,
          fontWeight: headerFW,
        },
        
      }}
    />
    </div>
  );
}

export default SearchTable;

// [
//   { title: 'Name', field: 'name' },
//   { title: 'Surname', field: 'surname' },
//   { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//   {
//     title: 'Birth Place',
//     field: 'birthCity',
//     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//   },
// ]

// [
//   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//   { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
// ]