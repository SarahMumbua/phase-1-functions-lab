// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const distanceHq = 42;
    return Math.abs(block - distanceHq);
  }
  
  function distanceFromHqInFeet(block) {
    const distanceInBlocks = distanceFromHqInBlocks(block);
    return distanceInBlocks * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    const distanceInBlocks = Math.abs(end - start);
    return distanceInBlocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  