import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// import { shadows } from '@mui/system';
const onBrown =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FonBrownTable.jpg?alt=media&token=025c44e1-3713-40de-8641-0ae5f93927a2";
const inCup =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FinCup.jpg?alt=media&token=c2697181-726e-467c-8148-da2a8bf2e43d";
const onTowel =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FLyingOnTowel.jpg?alt=media&token=5664f63e-5f1b-4e4a-bc73-2b034f45877d";
const onPowder =
  "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FonPowder.jpg?alt=media&token=886ed2e7-9d40-4b2a-af63-9e34a848e874";

export default function MasonryImageList() {
  return (
    <div>
      <Box
        sx={{
          margin: "0 auto", // 中央寄せ
          width: "100%", // スマホの可読性up
          height: 400,
          overflowY: "scroll",
          boxShadow: 0,
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8} rowHeight="auto">
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
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
    img: "https://firebasestorage.googleapis.com/v0/b/toughtofoceans.appspot.com/o/image%2FimageList%2FonPowder.jpg?alt=media&token=886ed2e7-9d40-4b2a-af63-9e34a848e874",
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
