// This is the file which packages and ships whichever routes are called upon.
// It is the job of the calling point to "require" the parent name of this folder,
// which has '/routes/apiRoutes' as its endpoint name

const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

module.exports = router;