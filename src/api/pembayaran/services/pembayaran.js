'use strict';

/**
 * pembayaran service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pembayaran.pembayaran');
