const db = require("./models");

db.sequelize.sync().then(() => {
  db.Sub_Services.create({ name: "Netflix", price: 8.99 });
  db.Sub_Services.create({ name: "Hulu", price: 5.99 });
  db.Sub_Services.create({ name: "YouTube", price: 11.99 });
  db.Sub_Services.create({ name: "Spotify", price: 9.99 });
  db.Sub_Services.create({ name: "Apple Music", price: 9.99 });
  db.Sub_Services.create({ name: "Office365", price: 9.99 });
  db.Sub_Services.create({ name: "Hello Fresh", price: 243.72 });
  db.Sub_Services.create({ name: "Blue Apron", price: 191.8 });
  db.Sub_Services.create({ name: "Disney+", price: 6.99 });
  db.Sub_Services.create({ name: "Sling Tv", price: 29.99 });
  db.Sub_Services.create({ name: "HBO Max", price: 14.99 });
  db.Sub_Services.create({ name: "ESPN+", price: 5.99 });
  db.Sub_Services.create({ name: "Amazon Prime", price: 12.99 });
  db.Sub_Services.create({ name: "Xbox Live", price: 9.99 });
  db.Sub_Services.create({ name: "Playstation Plus", price: 9.99 });
  db.Sub_Services.create({ name: "EA play", price: 4.99 });
});
