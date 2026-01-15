const express = require('express');
const {httpGetAllLaunches,httpAddNewLanch,httpAbortLaunch} = require('../../controllers/launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLanch);
launchesRouter.delete('/:id',httpAbortLaunch);

module.exports = launchesRouter;