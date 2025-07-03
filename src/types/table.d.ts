export interface TableColumn {
  Header: string;
  accessor: string;
}

export interface TableRow {
  [key: string]: string | number;
}
