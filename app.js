
const express = require('express');
const app = express();
const routes = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const swaggerDocument = yaml.load(fs.readFileSync('./resources/swagger.yaml', 'utf8'));

app.use(express.json());
app.use('/api', routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log('Documentação Swagger disponível em /swagger');
});
