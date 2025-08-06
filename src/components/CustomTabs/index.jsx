import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { COLORS } from "@/constants/colors";

export const CustomTabs = ({ options, width, background, isChild }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const height = "15px";

  return (
    <Box sx={{ width: "100%", overflowX: "auto",  }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable" // Makes tabs scrollable on smaller screens
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="custom responsive tabs"
        sx={{
          maxWidth: { xs: "100%", sm: width || "80%", md: width || "40%" },
          bgcolor: background || COLORS.white.offWhite,
          "& .MuiTabs-flexContainer": {
            whiteSpace: "nowrap",
          },
          "& .MuiTab-root": {
            fontSize: { xs: "12px", sm: "14px" },
            minWidth: "auto",
            padding: { xs: "6px 12px", sm: "8px 16px" },
            flexShrink: 0, // Prevents shrinking
          },
          "& .Mui-selected": {
             color: "white !important",
            background: COLORS.pruple,
          },
        }}
      >
        {options.map((item) => (
          <Tab value={item.value} label={item.label} key={item.value} />
        ))}
      </Tabs>
      <Box >{isChild && options[value]?.children}</Box>
    </Box>
  );
};

export default CustomTabs;
