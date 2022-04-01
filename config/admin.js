module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f1f2ab9bf77cbe79c812d046ee4cd91'),
  },
});
