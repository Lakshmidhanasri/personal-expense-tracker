require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");
const summaryRoutes = require("./routes/summaryRoutes");
const { sequelize } = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/summary", summaryRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
