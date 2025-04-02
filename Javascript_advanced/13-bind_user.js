const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Guillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",
  logWelcomeUser: function (welcomeString) {
    console.log(
      `${welcomeString}, ${this.firstName} ${this.lastName}. Your Occupation is: ${this.occupation}.`
    );
  },
};

  const bindLogWelcomeUser = user.logWelcomeUser.bind(user);
  bindLogWelcomeUser("Hello");