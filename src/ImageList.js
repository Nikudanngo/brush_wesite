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
    img: 'https://lh3.googleusercontent.com/H3t-In9ZGsnTLrshDh9lfylynePDmPLf38s5BdsQIy1PnQ6Npp6ijRkiS2_rq2zs48_O5-RDNdR7xnT-21aC-3ENncxfl2E6GKqjcCm_Gtpqq7wryiXt1WdFJ-s5EqQitjRB5U16lm0G7SZCGsLfgbVwLYDNC9hQs3YBvLw5GgCsu8xxCvJiL_KnIoauhKJFCUGzi6vL2EYUGRpkzuECjiMrg8Gx0D0KrcOIvUdejli_3RvHfiTtwZXKk90CXp3IsfKTzBZBBVC7Lhp4Jr-x9Sn6aqciG7efMuXvcEpnRsLOyD6zNkyMy2Cqtfs22i2xDWlE4pwHj6RqBSO1ZNqkukMVm4fmnjILZM6ID3yThDJRbaqGX6Pt4hCu3uW49z6jyU86BbIvcm94Vo-f7G8uZlfLluXpezdMFqz8FKO2cnQuqvx0F-roxlHru23cHfJghDUHmCSBbJHotSDzjGsoCf3DMOi8S9C55Z76f6-mWfigVSYHroV6DHCcMHZYG2PbIPUFpM2CjevDxI8qjXRKGwwntGOixG2LQ_Wkj1pSWqcVTH-eiEMEN_6q04YJnAUIwMHqYVqJeNwIJSaWCnrDEaQxFVYqCq7-4NF40amBzdfZ5ph1ppC5wj_WGKbCOts5bMZW8qtn7n4hDFnnbMDMpTmn0RZrxJYNAbD6E7v62IpwaP0oCqrx3uY6ALsszScknr_Sp1cnUefQGTWV3QUxVJc=w1200-h800-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/Fx3qGFABWnMAmjbo9VAQI1fbOI1kUh0rm7tLS5jHf1JqOVQ2l0mS3cF7H1A36mge-IP0ktsBtKZ9byLX1mMR67e1MTp0F6VHck7BaJqx9V1J0jMOizj4ejfPRIiVUHAK0mCwBs6xuMjoaut8cBlgC9HjxwmGnxQ7jlJErc0f4Cg_0_e0q6ZPD8F5u9LC6qUn-FHykBfumv8QEy-2rUQ41oof3tQi-Z1NC04bftU0cc3a_gD633GVOYbTGHpjJ61G-Z-oXpveIxohNu5BfRtq87jhdiCbfyO29zZPD9Jv4jCjVsh3_O_b_PzjTWCmgnh8tZEh60MHL4KXOJb0-S5K8lzcXdcV6AQPzSO71DrY33wQ4xOuD_u32_-wiA-vSbJKKDKQAa50jqqh_AwlakI3kLunfFtq4x8xbdUMUT6Z8g7PG-EOMrL6qy6NRGemQGl18PIHhCwKUBpc6e_k_tve_FUxnNB-rp4y7nh6S98zACuBDiwvDW3OXfHvvReYRjEHYv6QOLCiD-GDj6VX-Nue80nPBpQkVs0-Fy8dCmpNPk-KMkXgZpPABENgzufURUew_NsdtQU79W7hfBZa4jEijNra1wfBu6nhhpD3DCVx7yWQUukXD5S6Fc-VsVqUhRAGW0Ofklx8ZFxM0LElJlmfzCS0mTDPKRNKGkn3-DWSC1CDDearOo5IUy8ux-ZEcczSq6g1SnG5kiqEqKU807zHZPs=w1200-h801-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/pWQVDiW5Mq_Fr1Coust2B48wVd3n1G9qmkTgdOMhPkjS1cr5XMIMzqyvOjIOuJauKTTo-V_sM-Y1OeFC158Y8nv7pjQGB0HfMN4N-rNBiTBwOh_MtVtXrAKQ47NGWbUjTg5u2UWYkwiHyUOimyDtLV2UXZNcmjGBps8Awi-WyMUQX2RdXq9eqcKBZLXbFM4bekhMq1xGVECitW9BRq324LDvy8He9SyDMqUvpM6iRGAT6GOTMXbiLHS-X872pIb4pf62hn6oMWHNOm0kxrV5NBiOjyMOjpJ9lRliNBwTBwg4PXkCKA7G8VuEVgbOEUfMt_Y_cXxmAMKFpk2-_1-RXK_fDjYvl0JXLGupIZ9KPC7gVkA314kCxPGfk-8_WrUxQhK0q1iZWZLaE27pz8SVkL44F6ZYX364aMr2HAhHWf4NafXyRDYE2ksa4IN05eOGvBwdkwXkvmzNWldJhxMH2SgwZkqhz4hNHhtPZChacu5IBLTVAgsg5uQozyyu29OCflPdCiVQQTftvS4bS2IoZVKzMbJ3Gs9l5K4vpqkE0lEz-q59Z7u6lpnUe7DRB7CDO0W42erR23ewsgFDgdSjE4_sgCD0kopPnYM_Kk6EKS5UjhQKwt79IYm1ol5fCa2Imm9GpcK85fO76chfwlL1omPGO9Aqz9YLD6yugNvfnnxk3phfWYXhFi44tKgOoyTbB7U-sV_iDa-XKmVsx5FqycY=w1132-h755-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/I8PGu2HOk60B5PqgXjrIuI4goTxlmHUsAIJbmGfV_heqy4Fj642PtDDoO2GcytvxRvmvXe8HcBEZ6Z43Cff_ZpJvY5vmbubfYcrp_4_GC23qF5sCFsl4cg2KRyswLiuWN4fZ3vpEmPxHi--2v_aqQVd4pKV84P7QbQCvmfXObu1zjxzM4PmxnWpyn31mwjOkuV9soV9Md9DnGDSUe7p6d5fA1y5SLu-vJe3NRTped7Y3ma0qtj8dKeRb4ciiXNuz5HrsZWt0BtDnNyRtjkr6XknktDohAPcGBce1VcXcTry-tiDKobEJ6Zu0l6C_b6QFugk-gkqBZOX9ZhyNmDpgvKD4IOJvVdP3K5XfLnFDW7JF6l7BVO6xuC0webMClJn1C6STW1MYtZFnMQ1Wvq0zsaUE3jhEvxeuIAC0Pzj23s2qMgW31lsGq_H9k9i8_rXw5F9ZGlbCmbxwnvLeLj5atRHRbBaB_22XHUGDDVKJw8riuwWWcQ73tjbE6_tCbDtA3Ui7xXOQwv3ALmxsFyvWJjANmUTiZvSNl72bKVvzRgVtTVIybs68iD0wOgdDIi2RYr_VDlp_c58-mPfg321laOXV6G1O65cwwsucFEZX4YzoUbYOxcBQDHbweANKnO4q1Y3mpI07ZD_6zgK0_6c8udvTaWEI6Hi4BR_Erus5G9jWF6adUm2JiOeq5XkKneziEtXVHLlKXchqxqTMSxPmP-8=w1200-h1801-no?authuser=0',
    title: 'in cup',
  },
];