/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let daysCount = days * 40;

  if (days >= 3 && days < 7) {
    daysCount -= 20;
  } else if (days >= 7) {
    daysCount -= 50;
  }

  return daysCount;
}

module.exports = calculateRentalCost;
