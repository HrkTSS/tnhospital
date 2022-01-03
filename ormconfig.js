module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Dev',
  password: '1234',
  database: 'tn-hos',
  entities: ['dist/**/*.entity.js'],
  logging: true,
};
