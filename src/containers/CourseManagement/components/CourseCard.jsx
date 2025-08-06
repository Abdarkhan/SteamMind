import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Grid,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CourseCardImg from "../../../../public/assets/images/CourseCard.jpg";
import CustomModal from "@/components/CustomModal/CustomModal";

const CourseCard = ({ item, onEdit }) => {
  const { title, subTitle, img } = item || {};
  const staticImg =
    "https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fwww.imgacademy.com%2Fsites%2Fdefault%2Ffiles%2Fimg-academy-performance-center.jpg&imgrefurl=https%3A%2F%2Fwww.imgacademy.com%2Fnews%2Fmerrill-and-img-academy-launch-partnership-bring-financial-education-student-athletes&docid=xJfJtmJYxGeqHM&tbnid=braaqBNQug1cQM&vet=12ahUKEwjrruf1ht-OAxVwzQIHHaAJFCoQM3oECBgQAA..i&w=2400&h=1200&hcb=2&ved=2ahUKEwjrruf1ht-OAxVwzQIHHaAJFCoQM3oECBgQAA";

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setDeleteModalOpen(false);
    onDelete?.(item);
  };
  return (
    <>
      <Card sx={{ maxWidth: 320, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="140"
          image={img ?? CourseCardImg}
          // src={img ?? staticImg}
          alt="Web Development Masterclass"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${item.title}`}: {item.subTitle}
          </Typography>
          <Box
            display={{ xs: "block", md: "flex" }}
            gap={0.5}
            alignItems="center"
            justifyContent="center"
            px={1}
          >
            <Chip
              label="Technology"
              size="small"
              sx={{
                backgroundColor: "#f5e6ff",
                color: "#6a0dad",
                fontSize: 12,
              }}
            />
            <Chip
              label="Web Development"
              size="small"
              sx={{
                backgroundColor: "#e6f3ff",
                color: "#1976d2",
                fontSize: 12,
              }}
            />
            <Chip
              label="Live Sessions (20)"
              size="small"
              sx={{
                backgroundColor: "#e6ffe6",
                color: "#2e7d32",
                fontSize: 12,
              }}
            />
          </Box>
          <Grid display={"flex"} mt={2} justifyContent={"space-between"}>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              1,234 enrolled
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center", mt: 1 }}
            >
              <StarIcon sx={{ color: "#ff9800", mr: 0.5 }} /> 4.8 (256)
            </Typography>
          </Grid>
          <Grid display={"flex"} mt={2} justifyContent={"space-between"}>
            <Typography variant="h6" sx={{ color: "#d32f2f" }}>
              $89.99
            </Typography>
            <Grid justifyContent={"space-around"}>
              <DeleteIcon onClick={handleDeleteClick} />
              <BorderColorIcon onClick={onEdit} />
              <MoreVertIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <CustomModal
        open={deleteModalOpen}
        title="Conformation Alert"
        onClose={() => setDeleteModalOpen(false)}
        onSubmit={handleConfirmDelete}
        saveButtonText="Confirm"
      >
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Do you want to delete this Course?
        </Typography>
      </CustomModal>
    </>
  );
};

export default CourseCard;
