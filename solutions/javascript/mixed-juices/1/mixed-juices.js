// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  console.log(`${name}`);
  if (name === 'Pure Strawberry Joy') {
    return 0.5;
  } else if (name === 'Energizer' || name === 'Green Garden') {
    return 1.5;
  } else if (name === 'Tropical Island') {
    return 3;
  } else if (name === 'All or Nothing') {
    return 5;
  } else {
    return 2.5;
  }
} 

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded <= 0) return 0;
  
  let totalLimes = 0;
  let count = 0;
  
  while(totalLimes < wedgesNeeded && count < limes.length) {
    if (limes[count] === 'small') {
      totalLimes += 6;
    } else if (limes[count] === 'medium') {
      totalLimes += 8;
    } else if (limes[count] === 'large') {
      totalLimes += 10;
    }
    count++;
  }
  
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToMix = 0;
  let count = 0;
  
  while (timeToMix < timeLeft && count < orders.length) {
    timeToMix += timeToMixJuice(orders[count]);
    count++;
  }
  
  return orders.slice(count);
}
