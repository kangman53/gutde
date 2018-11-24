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

var total = 0;
var userName = 'Herman Yulianto';
var counter = 1;
var space = 0;
newList[counter].sort(function(a,b){return 0.5 - Math.random()});
for (var r=1; r<=4; r++) {
  var col = "";
  for (var c=1; c<=4; c++) {
    col += "<td id='"+space+"'>"+newList[counter][space]+"</td>"; space++;
  }
  $("#chessboard").append("<tr>"+col+"</tr>");
}


function confirmClick(n){
  if(counter >= 5){
    total += newKali[counter] * n;
    $('#listbox').addClass('d-none');
    $('#resultbox').removeClass('d-none');
    if(total === 0){
      document.getElementById('keterangan').innerHTML = `HAI ${userName}, TANGGAL LAHIRMU TIDAK ADA`;
      $('#keterangan').addClass('ketnull');
      $('.chessbox').addClass('boxnull');
      document.getElementById('result').innerHTML = 'SEHARUSNYA KAMU TIDAK ADA :-P';
      $('#result').addClass('null');
      $('#result').addClass('blinking');
    } else {
      document.getElementById('keterangan').innerHTML = `HAI ${userName}, TANGGAL LAHIRMU ADALAH`;
      $('#keterangan').addClass('ketresult');
      document.getElementById('result').innerHTML = total;
      $('#result').addClass('result');
      $('#result').addClass('blinking');
    }
  } else if(counter < 5){
    total += newKali[counter] * n;
    counter++;
    newList[counter].sort(function(a,b){return 0.5 - Math.random()});
    var space = 0;
    for (var i = 0; i < 16; i++) {
      document.getElementById(i).innerHTML = newList[counter][i];

    }
  }
}

$('#userName').on('keydown', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault()
        var nama = $(this).val()
        if (!nama) {
        document.getElementById('null-user').innerHTML = "Isikan Namamu";
          $('#null-user').removeClass('d-none')
        } else if(nama.length < 3){
          document.getElementById('null-user').innerHTML = "Isikan Nama Minimal 3 Karakter";
          $('#null-user').removeClass('d-none')
        } else {
          userName = nama;
          $('#namebox').addClass('d-none')
          $('#listbox').removeClass('d-none')
        }
    }
})

function submitUser() {
    var nama = $('#userName').val()
    if (!nama) {
      document.getElementById('null-user').innerHTML = "Isikan Namamu";
      $('#null-user').removeClass('d-none')
    } else if(nama.length < 3){
      document.getElementById('null-user').innerHTML = "Isikan Nama Minimal 3 Karakter";
      $('#null-user').removeClass('d-none')
    } else {
      userName = nama;
      $('#namebox').addClass('d-none')
      $('#listbox').removeClass('d-none')
    }
}
