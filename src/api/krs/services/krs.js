'use strict';

/**
 * krs service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::krs.krs');
