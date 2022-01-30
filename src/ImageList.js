import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import { shadows } from '@mui/system';

export default function MasonryImageList() {
  return (
    <div>
    <Box 
      sx={{
        margin:"0 auto", // 中央寄せ
        width: "80%", // スマホの可読性up
        height: 400, 
        overflowY: 'scroll' 
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
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLULq9Sm8NOIeAuEW2WKD2fEAdb5HCv0SI7clcYPdq3QABCnCnvJ2CwLggog4QeAIDa0C0S03_rmRK9cWhHQs43xhsp68Xp96iVTxaxcAW5SEEu73ClDjBEwGX2BadBkx9bqjcuJ70akMBfNr3dh5Tc=w2388-h1592-no?authuser=0',
    title: 'on powder',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLX_xKuCNsgETHuMmh3MFKgiO8bEaBl-VdhpaylIpKOC2JyEtOorcy0gphNaNTM_6Z8OLjpHyEJfrZsDC1O8pFG7eXgSmvBorMM2nzkd9DuYSMtS4QtPIUGSO6C4jO599E9AH6YPEE_6DPbxos-VwsA=w2388-h1592-no?authuser=0',
    title: 'on brown tabele',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLVSnd12th4j8Ty34EUckfQ5q39JJc_lIaa0Exvf8JPExWCg707swWwu0FRZjjBEFp_HnWbg_st3kwhTQVu205ugqnW2aujlT4LJWOChFKOSMic_QpYZTJSvJsioKcHEbFzMKHn984drhRI3U1CAI0M=w2390-h1592-no?authuser=0',
    title: 'lying on towel',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://lh3.googleusercontent.com/pw/AM-JKLVq7S6OAQ8U4L_Jregxipq_Apr7LaesDxMoEUd_6JuLL8On50VKk-WnPScSdPBlujZkjNUNq3e5H3iI2oOgPilIRnyJVHcwxhJVgXF0umNAs_BwFCBPUfFBODxfD_i3l5dVNZSt8_JvMRhQTiELbRY=w1062-h1592-no?authuser=0',
    title: 'in cup',
  },
];