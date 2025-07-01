// CustomTable.jsx

import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomTable = ({ headers, rows }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [selected, setSelected] = React.useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(rows.map((_, i) => i));
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <Box p={2}>
      <TableContainer component={Paper} sx={{ maxHeight: 440, overflowX: "auto" }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  {header.key === "select" ? (
                    <Checkbox
                      checked={selected.length === rows.length}
                      onChange={handleSelectAll}
                    />
                  ) : (
                    <Typography fontWeight="bold">{header.label}</Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex} hover>
                {headers.map((header, colIndex) => (
                  <TableCell key={colIndex}>
                    {header.key === "select" ? (
                      <Checkbox
                        checked={selected.includes(rowIndex)}
                        onChange={() => handleSelectOne(rowIndex)}
                      />
                    ) : (
                      row[header.key] ?? "-"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
