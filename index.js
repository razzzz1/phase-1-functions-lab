// Code your solution in this file!
const  street = 42;
const conv = 264;
function distanceFromHqInBlocks (blocks) {
    return Math.abs(blocks-street);
    }
  
  
  function distanceFromHqInFeet (blocks) {
     distanceFromHqInBlocks(blocks);
    let disinfeet = distanceFromHqInBlocks(blocks) * conv;
    return disinfeet;
  }
  
  function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * conv;
  }
  function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * conv;
  }
  function calculatesFarePrice (start, destination) {
    let distance = Math.abs(destination - start) * conv;
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        let chargabledistance = distance - 400;
        return chargabledistance * 0.02;
    } else{
        return 0;
    }
}

