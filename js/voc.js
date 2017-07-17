exports.findCost = function (speed,dataObject) {
  for (var i = 0; i < dataObject.length; i++) {
    if(speed == Object.keys(dataObject[i])){
      return dataObject[i][speed];
    }
  }
};

// module.exports.findCost = findCost;
