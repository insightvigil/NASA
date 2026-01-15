const express = require('express');
const {httpGetAllLaunches,httpAddNewLanch} = require('../../controllers/launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLanch);

module.exports = launchesRouter;