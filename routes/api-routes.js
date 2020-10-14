// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.post("/api/custom_services", isAuthenticated, (req, res) => {
    db.Custom_services.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      UserId: req.user.id
    }).then(custom => {
      res.json(custom);
    });
  });
  app.get("/api/services", isAuthenticated, (req, res) => {
    db.Sub_Services.findAll().then(dbSubs => {
      res.json(dbSubs);
    });
  });
  app.get("/api/customservices", isAuthenticated, (req, res) => {
    db.Custom_services.findAll({
      order: [["updatedAt", "DESC"]],
      where: {
        UserId: req.user.id
      }
    }).then(dbSubs => {
      res.json(dbSubs);
    });
  });
  app.get("/api/usersubs", isAuthenticated, (req, res) => {
    db.User_subs.findAll({
      include: [db.Sub_Services],
      order: [["updatedAt", "DESC"]],
      where: {
        UserId: req.user.id
      }
    }).then(dbSubs => {
      res.json(dbSubs);
    });
  });
  // app.get("/api/members", isAuthenticated, (req, res) => {
  //   db.User_subs.findAll({
  //     where: {
  //       UserId: req.user.id
  //     }
  //   }).then(function (userSubs){
  //     res.json(userSubs);
  //   })
  // })
  app.post("/api/members/:id", (req, res) => {
    db.User_subs.create({
      SubServiceId: req.params.id,
      UserId: req.user.id
    }).then(data => {
      res.json(data);
    });
  });
  app.delete("/api/customservice/:id", (req, res) => {
    db.Custom_services.destroy({
      where: {
        UserId: req.user.id,
        id: req.params.id
      }
    }).then(data => {
      res.json(data);
    });
  });

  app.delete("/api/usersubs/:id", (req, res) => {
    db.User_subs.destroy({
      where: {
        UserId: req.user.id,
        id: req.params.id
      }
    }).then(data => {
      res.json(data);
    });
  });
  app.get("/api/usersum/", async (req, res) => {
    const userSubsSumPromise = db.User_subs.findAll({
      include: [db.Sub_Services],
      where: {
        UserId: req.user.id
      }
    }).then(data => {
      let sum = 0;
      data.forEach(x => (sum += +x.Sub_Service.dataValues.price));
      return sum;
    });
    const customSubsSumPromise = db.Custom_services.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(data => {
      let sum = 0;
      data.forEach(x => (sum += +x.dataValues.price));
      return sum;
    });

    const [userSubsSum, customSubsSum] = await Promise.all([
      userSubsSumPromise,
      customSubsSumPromise
    ]);
    res.json((userSubsSum + customSubsSum).toFixed(2));
  });
};
