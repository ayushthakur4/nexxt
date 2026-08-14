const express = require('express')
const mongoose = require('mongoose');

const app = express();
app.use('/api/auth',authRouter);
app.use('/api/task')