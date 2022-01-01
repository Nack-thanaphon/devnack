module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d5c1820912991a71cfda7713b10b3a5'),
  },
});
