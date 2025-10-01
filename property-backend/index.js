require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Property Management API is running');
});

const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);
const zoneRoutes = require("./routes/zoneRoutes");
app.use("/api/zones", zoneRoutes);
const transactionTypeRoutes = require("./routes/transactionTypeRoutes");
app.use("/api/transaction-types", transactionTypeRoutes);




const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
    console.log('PORT:', process.env.PORT);
})