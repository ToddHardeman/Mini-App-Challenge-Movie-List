/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'Mean Girls', cover: "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_.jpg", watched: true},
    {id: 2, title: 'Hackers', cover: "https://m.media-amazon.com/images/M/MV5BOGZkZTc2ZjItNzIzMS00ODRlLTliNjgtZjRmNzM2NjkzZTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", watched: true},
    {id: 3, title: 'The Grey', cover: "https://m.media-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_.jpg", watched: false},
    {id: 4, title: 'Sunshine', cover: "https://m.media-amazon.com/images/M/MV5BNmExYTA4MGYtNWUwNC00YTZhLWE0YzUtMjI0OGYyMmQ4YTVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", watched: false},
    {id: 5, title: 'Ex Machina', cover: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_FMjpg_UX1000_.jpg", watched: false},
    { id: 6, title: 'Inception', cover: "https://m.media-amazon.com/images/I/71uKM+LdgFL.jpg" , watched: false},
    { id: 7, title: 'The Matrix', cover: "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg" , watched: false},
    { id: 8, title: 'Interstellar', cover: "https://m.media-amazon.com/images/I/71JC2qvPx5L._AC_UF894,1000_QL80_.jpg" , watched: false},
    { id: 9, title: 'The Dark Knight', cover: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg", watched: false },
    { id: 10, title: 'Pulp Fiction', cover: "https://m.media-amazon.com/images/I/61Z4YX7EbtL._AC_UF894,1000_QL80_.jpg" , watched: true},
    { id: 11, title: 'The Shawshank Redemption', cover: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_UF894,1000_QL80_.jpg" , watched: true},
    { id: 12, title: 'The Godfather', cover: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg" , watched: true},
    { id: 13, title: 'Forrest Gump', cover: "https://m.media-amazon.com/images/I/613ZgTigTpL._AC_UF894,1000_QL80_.jpg" , watched: true},
    { id: 14, title: 'Fight Club', cover: "https://i.etsystatic.com/18242346/r/il/c9908e/2412674268/il_fullxfull.2412674268_1sgm.jpg" , watched: true},
    { id: 15, title: 'The Lord of the Rings', cover: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg" , watched: false}
  ]);
};
