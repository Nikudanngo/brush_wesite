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
    img: 'https://lh3.googleusercontent.com/avnzHLSiHBEwHK4cnyMNffaoIxgwCP7bTqcNObnDaSHSuHWqlkk1-mO54T2CSDwqmAvEHd8MrqkuxC00NrKthBzSXb8c8Ph2fk0DMXDDShIbt2HRdU93VFAS6hx-K5UfLr3mtF-eV-ys8kzLSpjrPV1CSHWlJQ3QD9IbMdJ6KUZ_1gyPUE4ZD6lhM3Oy-EU9k1-Kb1pf2LM06w1fTW3ECVe41nW82AXgGDjLQeua2nR3xas07Vjh6_s_jV__1ldCtunzUJPbwFn1HYqvXyIWz5mh488UFp7K-x8iEj2Lr2LeysvFo_aDB0yHhOhAjjqoB207xqJksFZCaYGvyuOJ8nUkkCklvhx7MhyKb5lbdvBf-bskXE9ViRJMW2bZBQjMDcGGz5EidkH_IQ0FUkV_-dNaeB3Kv3RpuJp_4xRk79pBYmZqet6-5Xi0undtqGgJDAxgCmbHYnBE2D_dqJukEYiVeOcvhlILr989Wst67_Z0xXmhWQuDkx_CMVA3dfRRaW_lZYDV_QEG1-ga_lmfGX9KOooKNJ6WLnm2X4Us7yubl6U2vyLOyHrk7Obt8Cs0BdHw5SOhWEzK0vdOHwirnU4iIDhA8BiSowcf8NgG7iBSnZcPC7HQlYbbhZd5MKYczb7zEg8EGQ-hEA-xV4UVWEiF0RdZMn2NN83LyKCAVxPqJzoSTbI-Lx0mrQktXeHuYI3wRjmrROeIVtMDhQERAbo=w1200-h800-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/EZ2puJACB_jMsFRfSW1Pmf14vb3BXOOr0Si4KYhGWZ1fJHqj6ctO4r6KzeNYEEe0zt-LkIJx34i2aTRntgLr597bdi0F-w8nONj4FvliJZsACT8JorvyU0W4638GgNa2c895phAEOAZNEWY4v6mV0FtWiA9OjdURNnJxMDNTN4SfbVCasx8KHh2w3iT-2ptJmicZaYCOrLiKDH1iPBMhSHTQmTPaEGRHoB7_mSQk8TREbM0JXAZMWJzwzcnBmz0-e50J6nQ7fV7NiBhW6rUPk1kiAgj3w7KnJbHDFlXGf1D0flBlp3hPwFXOI5BfeX6p3q3UeibXdwOb9dc55Adb9kiy2HgmicXrYaOCl1os7YmbgKWFO_EeOCgwQTKcIMoo8cIwLEbKMWI2v9Hahvcap_cJBXIxzJNKAwkzSKEMyYB34XuGXX_ODpd_0IwG7mAaz7XfdI9AV10HBZiSr2pH1AuA_A6yu1C_D5LNcPEpfWgkGfhmJ7L1h4ZDtClVki_E9-rJVkIa-AJKJhbf9OQ7fdszqcf--ip-0JCOho5qLuOZOPsHK1hu-zEaw0xeBHAb8oXlDOpPJwBFN2vq7J9EhYD49cxKsoeouqZjRqTqcj1qxLAskThSBKV86aH14nCvk0pDT1ekdTMrArgNXzHNTx4BF2FYwAncLKLA0mrJgoxNsJqc6bsR8zBblvJ_bI-QUIurqBt22w9YxkbXs4o3yoU=w1200-h801-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/MVeAq8nLFwAxJd2TmduvJRAaeiyb8ozlMvuJlKqDNX1dMtxW1hk0wQ4BIde3x4Oe--0JVq4DtR9aG2sh5F--IaTQZ-gGtHVssMDo-Z1PauoZyTYRQeRE41B8CLy9z8IiNKScbfLvoFM6_Vyk1xt0-m3nWTOLOe-wH3Y_13GPfY8gw_tFJlTuB5lUUyoZXRmh-MboMhVfo1nUOLeZUSBW24S5rbvO3Jcf-1dOxcmxb8p3Bo2Sf0GGaqiPamT0FrGkU3Gzz8m41bIGpP8O83k9UDav8eHqqnFowfAZgDv3WvjOXIqRwMksvhsB3Yv8Yj7z382c78hSRef7ramdGo2hSLQcUWU1gjAn2ESz8ldSyjZAxMHKtQZ8Mvuni6KCB5-6xzvpJTz2bZrf62ie8XeFxpytPzFSCILmygoagNh0q9WQW6RbtocEEH1KOMzpw9X5EqtksFdgIbj3rm_Z0EpKwCC4Z9sFBsazDyqIGslXaBGnQBNQOfUlYvP2T7WkI2YNPwHWjoUvqmJKMN3B6b5T4zOoNk0bobJoc0gMG2YhijHoDjTW0yB3ARlPM5e1JcyzX-oUbER3Al6CIDSZ5DKOTwDZN2qK2UetgnE1n5HE76vDRGpYY-s5UKbIxb8iwwnwBZDKjsGr6_BXatJzb0H5HnGCfjfQ4Zn4EMdEnyhGf82XnUlPm_PR4OrIiu3x4iGHyuojT_lRHTiCTPrm8BjHyF0=w300-h200-no?authuser=0',
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
    img: 'https://lh3.googleusercontent.com/s90gGgkFtTBYh7542LyN8Zx5iFLb6LjVUWgfDrfuLs340hMme3EUxonEh8Oy1XIPIrKYh_0JhJtyJ-GTzznn0i5Z1tzt0RLQpkqP_-nHksjouwPudpjSTVCNp3BCX5MLFWWAE-8MeGROIrJaIc4XvVZw-_AFe5WPGERLgZnLVl7Co6_j1tO9CrtC4rv9bpqqZ7gUzDeS0ZYCZTs_GerJtiA8-nTBJycjMchtSjdGcCPTk_mk8u2o8CJxKkSOzXmRFDF2gIZjvlgpEZwzBJIMXqnU-tuF1pwQi0_YAAW6cUCWwqBJeolWLoT4w1eiPfZNjIom-Dik7QI6W3wHFCiWeycb1QtDkwpMucoZbXnV7NmKHp8A_rc_L0NsFGVtd5-w30A00vI78jOG6KYFp0561mDpQj0s-jhNu3EDknuho2t-KDG7vFVE6ZAfI4NV0_-vice-AKZzHhYdKZlQR10a6x4ceNcBSxAaim2m6SXfAJOznSX_4he072ue_KrZh4vAisZFKP8dI31prugGDLfR-M_vFwTwLPYAkNSCH5VGD7xvM6bApMrERZsMo1IQId2IBVM1-SnsaYALMe1A4mH4nd6Hxm4jQXWV-sNUakm9-wOFTOSsvQLLYJDA4maIDIbXG--ewQNDRnbZzd-dikSEwe7hFDWEVL8HCAjN2wZgJUYBBtQrZDyl9Gbz6IxmJvtDpBY3lqKwhDC6QMWgB3V_8JU=w1200-h1801-no?authuser=0',
    title: 'in cup',
  },
];