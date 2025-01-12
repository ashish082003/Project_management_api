require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const projectRoutes = require('./routes/projectRoutes');


const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Project Management api");
})
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
