// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) *265;
}

distanceTravelledInFeet (start, destination) {
  if (start < destination ) {
    return (destination - start ) * 264;
  } else {
    return (start - destination) * 264;
  }
}
