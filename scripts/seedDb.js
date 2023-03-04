const { Shorturlmodel } = require('../model').Shorturlmodel;

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
// eslint-disable-next-line no-use-before-define
seed();

async function seed() {
  // create tables
  await Shorturlmodel.sync({ force: true });

  // insert data
  await Promise.all([
    Shorturlmodel.create({
        originalUrl: "https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript",
        shortUrl: "abcde",
    }),
  ]);
}
