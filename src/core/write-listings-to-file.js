import { writeFile } from 'fs';

/**
 * Writes a JSON representation of an Etsy shop's listings to a file named for the shop's ID.
 *
 * @param {number} shopID - An individual Etsy shop ID
 * @param {Object} listings - A JSON representation of the shop's listings
 *
 * @returns {null} Not used.
 */
const writeListingsToFile = (shopID, listings) => (
  writeFile(`item-listings/${shopID}.json`, JSON.stringify(listings), 'utf8', (err) => {
    if (err) throw err;
  })
);

export default writeListingsToFile;
