import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import { shadows } from '@mui/system';
import onBrown from "../img/imageList/onBrownTable.jpg";
import inCup from "../img/imageList/inCup.jpg";
import onTowel from "../img/imageList/LyingOnTowel.jpg";
import onPowder from "../img/imageList/onPowder.jpg";

export default function MasonryImageList() {
  return (
    <div>
      <Box
        sx={{
          margin: "0 auto", // 中央寄せ
          width: "100%", // スマホの可読性up
          height: 400,
          overflowY: "scroll",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8} rowHeight="auto">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: onPowder,
    title: "on powder",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: onBrown,
    title: "on brown table",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: onTowel,
    title: "lying on towel",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: inCup,
    title: "in cup",
  },
];
