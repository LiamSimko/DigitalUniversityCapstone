import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useTable } from "react-table";

const StyledTable = styled.table`
  margin: 2em 3em;
  font-size: 25px;
  font-family: poppins;
  width: 90%;
  border-spacing: 0;
  border: 1px solid grey;
  th,
  td {
    width: 50%;
    text-align: justify;
    padding: 0.5em;
    border: 1px solid grey;
  }
`;

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

Table.defaultProps = {
  columns: [],
  data: [],
};

export default Table;
