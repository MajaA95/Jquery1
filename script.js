
  $('#btn').click( function getText(){
  let text = $('#write').val ();
  document.getElementById('display').innerHTML=text; //$('#display').html();

})

$('#button').click( function getText(){
  let write =$('#text').val ();
  let color =$('#color').val ();
  document.getElementById('color').innerHTML=color;
  document.getElementById('result').innerHTML=write;
})



