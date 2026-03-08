// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBird = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBird += birdsPerDay[i];
  }
  return totalBird;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  let days = 0;
  let weeks = 1;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirds += birdsPerDay[i];
    days++;
    if (weeks === week && days === 7) {
      return totalBirds;
    } else if (days === 7) {
      totalBirds = 0;
      days = 0;
      weeks++;
    }
  }
  return totalBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let days = 1;
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (days % 2 === 1) {
      birdsPerDay[i]++;
    }
    days++;
  }
  return birdsPerDay;
}
