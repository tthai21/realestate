import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { likeHouse } from "@/redux-toolkit/userSlice";
import { useDispatch } from "react-redux";

const FloatingActionButtons = React.forwardRef((props, ref) => {
  const { isLiked, id } = props;
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const likeHandler = () => {
    dispatch(likeHouse({ houseId: id }));
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {!user ? (
        <Fab ref={ref} aria-label="like" onClick={likeHandler} disabled>
          <FavoriteIcon className={`text-white`} />
        </Fab>
      ) : (
        <Fab ref={ref} aria-label="like" onClick={likeHandler}>
          <FavoriteIcon className={isLiked ? `text-red-500` : `text-white`} />
        </Fab>
      )}
    </Box>
  );
});

export default FloatingActionButtons;
