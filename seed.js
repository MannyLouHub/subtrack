const db = require("./models");

db.sequelize.sync().then(() => {
  db.Sub_Services.create({
    icon: "/img/netflix.jpg",
    name: "Netflix",
    category: "Entertainment",
    price: 8.99
  });
  db.Sub_Services.create({
    icon: "/img/hulu.jpg",
    name: "Hulu",
    category: "Entertainment",
    price: 5.99
  });
  db.Sub_Services.create({
    icon: "/img/youtube.png",
    name: "YouTube",
    category: "Entertainment",
    price: 11.99
  });
  db.Sub_Services.create({
    icon: "/img/spotify.png",
    name: "Spotify",
    category: "Music",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/appleMusic.jpg",
    name: "Apple Music",
    category: "Music",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/office365.png",
    name: "Office365",
    category: "Productivity",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/helloFresh.png",
    name: "Hello Fresh",
    category: "Food",
    price: 243.72
  });
  db.Sub_Services.create({
    icon: "/img/blueApron.png",
    name: "Blue Apron",
    category: "Food",
    price: 191.8
  });
  db.Sub_Services.create({
    icon: "/img/disney.png",
    name: "Disney+",
    category: "Entertainment",
    price: 6.99
  });
  db.Sub_Services.create({
    icon: "/img/sling.jpg",
    name: "Sling Tv",
    category: "Entertainment",
    price: 29.99
  });
  db.Sub_Services.create({
    icon: "/img/hboMax.png",
    name: "HBO Max",
    category: "Entertainment",
    price: 14.99
  });
  db.Sub_Services.create({
    icon: "/img/espn.jpg",
    name: "ESPN+",
    category: "Entertainment",
    price: 5.99
  });
  db.Sub_Services.create({
    icon: "/img/prime.jpg",
    name: "Amazon Prime",
    category: "Shopping",
    price: 12.99
  });
  db.Sub_Services.create({
    icon: "/img/xbox.jpeg",
    name: "Xbox Live",
    category: "Gaming",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/playstation.jpg",
    name: "Playstation Plus",
    category: "Gaming",
    price: 9.99
  });
  db.Sub_Services.create({
    icon: "/img/ea.png",
    name: "EA play",
    category: "Gaming",
    price: 4.99
  });
});
