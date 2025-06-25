import { Rating } from "@mui/material";

export const INS_HEADER = ["Select All", "Name", "Email", "Courses", "Student", "Rating", "Status", "Action"];
export const STD_HEADER = ["Select All", "Name", "Courses", "Subscription", "Enrolled Date", "Expiry Date", "Status", "Action"];

export const INS_ROWS = [
  {
    name: "Abdar Khan",
    email: "abdar@example.com",
    courses: "English",
    student: 10,
    rating: 4.5,
    status:"Active",
    action:"..."
    // createdat: "2024-06-01",
    // dob: "1999-12-20",
  },
  {
    name: "Ali Ahmed",
    email: "ali@example.com",
    courses: "English",
    student: 10,
    rating: 4.5,
    status:"Active",
    action:"..."
  },
];

export const STD_ROWS = [
  {
    name: "Abdar Khan",
    courses: "English",
    subscription: "Monthly",
    enrolledDate: "2024-06-01",
    expiryDate: "2024-12-01",
    status: "Active",
    action: "..."
  },
  {
    name: "Ali Ahmed",
    courses: "Math",
    subscription: "Yearly",
    enrolledDate: "2023-09-15",
    expiryDate: "2024-09-15",
    status: "Inactive",
    action: "..."
  },
];