module.exports = (app, server) => {
  server.get('/patients/:id', (req, res) => {
    const actualPage = '/patients/detail';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/organizations/:id', (req, res) => {
    const actualPage = '/organizations/detail';
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });
};
