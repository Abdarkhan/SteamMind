import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { COLORS } from "@/constants/colors";

export const CustomTabs = ({ options, width, background, isChild}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const height = "15px";

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
      
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          width: width || "40%",
          height: 15,
          "& .MuiTabs-list": {
            bgcolor: background || COLORS.white.offWhite,

            color: "black",
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
