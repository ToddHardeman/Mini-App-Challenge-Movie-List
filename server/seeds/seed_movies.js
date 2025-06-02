/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Mean Girls', cover: "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_.jpg"},
    {id: 2, title: 'Hackers', cover: "https://m.media-amazon.com/images/M/MV5BOGZkZTc2ZjItNzIzMS00ODRlLTliNjgtZjRmNzM2NjkzZTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
    {id: 3, title: 'The Grey', cover: "https://m.media-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_.jpg"},
    {id: 4, title: 'Sunshine', cover: "https://m.media-amazon.com/images/M/MV5BNmExYTA4MGYtNWUwNC00YTZhLWE0YzUtMjI0OGYyMmQ4YTVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
    {id: 5, title: 'Ex Machina', cover: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UX1000_.jpg"},
  ]);
};
