import React, { useState, useEffect } from "react";
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
  Button,
} from "@mui/material";
import { COLORS } from "@/constants/colors";
import { SmartButton } from "@mui/icons-material";

const ROWS_PER_PAGE = 5;

const CustomTable = ({
  headers,
  rows,
  onSelectionChange,
  onDeleteSelected,
}) => {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(rows.length / ROWS_PER_PAGE);
  const paginatedRows = rows.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(paginatedRows.map((_, i) => i + page * ROWS_PER_PAGE));
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (index) => {
    const absoluteIndex = page * ROWS_PER_PAGE + index;
    if (selected.includes(absoluteIndex)) {
      setSelected(selected.filter((i) => i !== absoluteIndex));
    } else {
      setSelected([...selected, absoluteIndex]);
    }
  };

  useEffect(() => {
    onSelectionChange?.(selected);
  }, [selected, onSelectionChange]);

  const handleDelete = () => {
    onDeleteSelected?.();
  };

  const handleNextPage = () => {
    if (page < pageCount - 1) setPage((prev) => prev + 1);
  };

  return (
    <Box p={2}>
      {selected.length > 0 && (
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={{ backgroundColor: COLORS.pruple, color: "white" }}
          >
            Delete
          </Button>
        </Box>
      )}

      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  {header.key === "select" ? (
                    <Checkbox
                      checked={
                        selected.filter(
                          (i) =>
                            i >= page * ROWS_PER_PAGE &&
                            i < (page + 1) * ROWS_PER_PAGE
                        ).length === paginatedRows.length
                      }
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
            {paginatedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex} hover>
                {headers.map((header, colIndex) => (
                  <TableCell key={colIndex}>
                    {header.key === "select" ? (
                      <Checkbox
                        checked={selected.includes(
                          page * ROWS_PER_PAGE + rowIndex
                        )}
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

      {/* Pagination Controls - just like image */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          // mt={1}
          sx={{
            ml: { sm: 10, md: 52 },
          }}
        >
          <Typography sx={{ mx: 2 }}>{`Page ${
            page + 1
          }/${pageCount}`}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: COLORS.pruple,
            color: "white",
            textTransform: "none",
            px: 3,
            borderRadius: "16px",
            "&:disabled": {
              backgroundColor: "#ccc",
            },
          }}
          onClick={handleNextPage}
          disabled={page >= pageCount - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomTable;
