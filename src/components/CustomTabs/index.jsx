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
    <Box sx={{ width: width || "65%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          height: 15,
          overflowX: "auto", // Enables horizontal scrolling if the tabs overflow
          "& .MuiTabs-list": {
            bgcolor: background || COLORS.white.offWhite,
            color: "black",
            whiteSpace: "nowrap", // Prevents the tabs from wrapping to the next line
            "& .Mui-selected": {
              background: COLORS.pruple,
              color: "white",
            },
          },
        }}
      >
        {options.map((item) => (
          <Tab value={item.value} label={item.label} key={item.value} />
        ))}
      </Tabs>
      <Box>{isChild && options[value]?.children}</Box>
    </Box>
  );
};

export default CustomTabs;
