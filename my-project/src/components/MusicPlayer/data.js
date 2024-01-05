const importAll = (r) => {
  let song = {};
  r.keys().forEach((item) => {
    song[item.replace("./", "")] = r(item);
  });
  return song;
};

const images = importAll(
  require.context("../../assets/images/", false, /\.(png|jpe?g)$/)
);

const musics = importAll(
  require.context("../../assets/music/", false, /\.(mp3)$/)
);

export const dataLayout = {
  Title: "Now playing:",
};

export const songs = [
  {
    name: "Lạc Trôi (Triple D Remix)",
    singder: "Sơn Tùng M-TP",
    path: musics["song1.mp3"],
    image: images["song1.png"],
  },
  {
    name: "Túy Âm - Masew - Nhật Nguyễn",
    singder: "Xesi",
    path: musics["song2.mp3"],
    image: images["song2.png"],
  },
  {
    name: "Cùng Anh",
    singder: "Ngọc Dolil - Hagii - STee",
    path: musics["song3.mp3"],
    image: images["song3.png"],
  },
  {
    name: "Chạm Khẽ Tim Anh Một Chút Thôi",
    singder: "Noo Phước Thịnh",
    path: musics["song4.mp3"],
    image: images["song4.png"],
  },
  {
    name: "Màu Nước Mắt",
    singder: "Nguyễn Trần Trung Quân",
    path: musics["song5.mp3"],
    image: images["song5.jpeg"],
  },
  {
    name: "Hãy Trao Cho Anh",
    singder: "Sơn Tùng M-TP, Snoop Dogg",
    path: musics["song6.mp3"],
    image: images["song6.jpg"],
  },
  {
    name: "Em Của Ngày Hôm Qua",
    singder: "Sơn Tùng M-TP",
    path: musics["song7.mp3"],
    image: images["song7.jpg"],
  }
];
