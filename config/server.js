module.exports = ({ env }) => ({
  host: env('HOST','0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2']),
  },
});
