const fetch = require('node-fetch');

const resolvers = {
  async store(parent, args) {
    const url = `https://www.jumbo.com/INTERSHOP/rest/WFS/Jumbo-Grocery-Site/webapi/headerdetail/storeaddress?storeid=${args.id}`;
    const headers = { cookie: 'sid=FrPWiK7yANrXiPJyqcPNlM34YqUYy9rk2PBW0USi' };
    const response = await fetch(url, { headers });

    const result = await response.json();
    return {
      id: args.id,
      name: result.address.displayName,
      address: `${result.address.address1} ${result.address.address2} ${result.address.address3}`.trim(),
      postalCode: result.address.postalCode,
      city: result.address.city,
    };
  },
};

module.exports = resolvers;
