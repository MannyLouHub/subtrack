require("dotenv").config();
const db = require("./models");

db.sequelize.sync().then(() => {
  db.Sub_Services.create({
    icon: "/img/netflix.jpg",
    link: "https://www.netflix.com/",
    name: "Netflix",
    category: "Entertainment",
    price: 8.99
  });
  db.Sub_Services.create({
    icon: "/img/hulu.jpg",
    name: "Hulu",
    link: "https://www.hulu.com/",
    category: "Entertainment",
    price: 5.99
  });
  db.Sub_Services.create({
    icon: "/img/youtube.png",
    name: "YouTube",
    link: "https://www.youtube.com/premium",
    category: "Entertainment",
    price: 11.99
  });
  db.Sub_Services.create({
    icon: "/img/spotify.png",
    name: "Spotify",
    link: "https://www.spotify.com/us/",
    category: "Music",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/appleMusic.jpg",
    name: "Apple Music",
    link: "https://www.apple.com/apple-music/",
    category: "Music",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/office365.png",
    name: "Office365",
    link: "https://www.office.com",
    category: "Productivity",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/helloFresh.png",
    name: "Hello Fresh",
    link: "https://www.hellofresh.com/",
    category: "Food",
    price: 243.72
  });
  db.Sub_Services.create({
    icon: "/img/blueApron.png",
    name: "Blue Apron",
    link: "https://www.blueapron.com/",
    category: "Food",
    price: 191.8
  });
  db.Sub_Services.create({
    icon: "/img/disney.png",
    name: "Disney+",
    link: "https://www.disneyplus.com/",
    category: "Entertainment",
    price: 6.99
  });
  db.Sub_Services.create({
    icon: "/img/sling.jpg",
    name: "Sling Tv",
    link: "https://www.sling.com/",
    category: "Entertainment",
    price: 29.99
  });
  db.Sub_Services.create({
    icon: "/img/hboMax.png",
    name: "HBO Max",
    link: "https://www.hbomax.com/",
    category: "Entertainment",
    price: 14.99
  });
  db.Sub_Services.create({
    icon: "/img/espn.jpg",
    name: "ESPN+",
    link: "https://plus.espn.com/",
    category: "Entertainment",
    price: 5.99
  });
  db.Sub_Services.create({
    icon: "/img/prime.jpg",
    name: "Amazon Prime",
    link: "https://www.primevideo.com/?ref_=dvm_pds_amz_ve_dc_s_g%7Cm_GWwtayADc_c231825861837",
    category: "Shopping",
    price: 12.99
  });
  db.Sub_Services.create({
    icon: "/img/xbox.jpeg",
    name: "Xbox Live",
    link: "https://www.xbox.com/en-US/live/",
    category: "Gaming",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/playstation.jpg",
    name: "Playstation Plus",
    link: "https://www.playstation.com/en-us/ps-plus/",
    category: "Gaming",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/ea.png",
    name: "EA play",
    link: "https://www.ea.com/ea-play-live",
    category: "Gaming",
    price: 4.99
  });
});
