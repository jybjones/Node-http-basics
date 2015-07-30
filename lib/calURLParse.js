module.exports = function() {
 var lvl1 = +url.split('/')[2];
 var lvl2 = +url.split('/')[3];

 if(isNaN(lvl1) || isNaN(lvl2)) {
  return
 }

//if 2nd level is valid, check if level1 is valid//
 if (lvl2) {
  //month in year
  if(lvl1 > 12) {
    //year/month
    return './cal' + lvl2 + ' ' + lvl1;
  } else {
    //month/year
    return './cal' + lvl1 + ' ' + lvl2;
  }

 }else if (lvl1) {
  //full year
  return './cal' + lvl1
 } else {
  //current month
  return './cal';
 }
};
