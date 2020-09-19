"use strict";
const { newWindow } = require('./helper');
exports.newDisplayWindow = () => newWindow('./modules/Display/index.html', 600, 600, true);
