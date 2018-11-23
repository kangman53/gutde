function tebakTanggal(array){
  var newList = new Object();
  newList['1'] = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31];
  newList['2'] = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31];
  newList['3'] = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31];
  newList['4'] = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31];
  newList['5'] = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  var newKali = new Object();
  newKali['1'] = 1;
  newKali['2'] = 2;
  newKali['3'] = 4;
  newKali['4'] = 8;
  newKali['5'] = 16;
  // var tanggal = 0;
  // for(var i = 0; i < array.length; i++){
  //   if(array[i]){
  //     tanggal += newKali[i+1];
  //   }
  // }
  // return tanggal;
  var counter = 1;
  var newArray = newList[counter].sort(function(a,b){return 0.5 - Math.random()});
  return newArray;
}

console.log(tebakTanggal([1,0,0,1,1]));
