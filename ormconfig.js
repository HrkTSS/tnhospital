module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Dev',
  password: '1234',
  database: 'tnhos',
  entities: ['dist/**/*.entity.js'],
  logging: true,
};
