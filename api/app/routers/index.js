const express = require('express');

const routerApi = require('./api');

const router = express.Router();

// Ici l'ordre est très important on classera toujours les routeurs du plus spécifique au moins
// spécifique.
// Car chaque routeur a sa propre route de gestion de 404, donc il aura forcément une impasse à la
// fin de chaque router
router.use('/api', routerApi);

module.exports = router;
