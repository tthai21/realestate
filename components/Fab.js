import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function FloatingActionButtons({ disable }) {
  const [like, setLike] = React.useState(false);
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {disable ? (
        <Fab aria-label="like" onClick={likeHandler}>
          <FavoriteIcon className={`text-white`} />
        </Fab>
      ) : (
        <Fab aria-label="like" onClick={likeHandler} >
          <FavoriteIcon className={like ? `text-red-500` : `text-white`} />
        </Fab>
      )}
    </Box>
  );
}
