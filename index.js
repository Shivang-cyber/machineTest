const express = require('express');
const app = express();
const routes = require('./routes/routes');
const sequelize = require("./config/sequelize")
app.use(express.json());

// Routes
app.use('/api', routes);

app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
sequelize.sync().then(()=>{
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
 });
})

