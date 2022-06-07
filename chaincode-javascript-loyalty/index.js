/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

const CustomerLoyaltyContract = require('./lib/customerloyalty.js');

module.exports.tokenERC721Contract = CustomerLoyaltyContract;
module.exports.contracts = [CustomerLoyaltyContract];
