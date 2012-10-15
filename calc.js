//JavaScriptファイル

var first_num = 0;
var second_num = 0;
var symbol;

$(function(){
    $('#no1').click(function(){
      first_num += '1'; 
      $('#comment').text(first_num);
    });
    $('#no2').click(function(){
      first_num += '2';
      $('#comment').text(first_num);
    });
    $('#no3').click(function(){
      first_num += '3';
      $('#comment').text(first_num);
    });
    $('#no4').click(function(){
      first_num += '4';
      $('#comment').text(first_num);
    });
    $('#no5').click(function(){
      first_num += '5';
      $('#comment').text(first_num);
    });
    $('#no6').click(function(){
      first_num += '6';
      $('#comment').text(first_num);
    });
    $('#no7').click(function(){
      first_num += '7';
      $('#comment').text(first_num);
    });
    $('#no8').click(function(){
      first_num += '8';
      $('#comment').text(first_num);
    });
    $('#no9').click(function(){
      first_num += '9';
      $('#comment').text(first_num);
    });
    $('#no0').click(function(){
      first_num += '0';
      $('#comment').text(first_num);
    });
    $('#equal').click(function(){
      if (symbol = 'multiplication'){
        $('#comment').text(Number(first_num) * Number(second_num));
      } else if (symbol = 'division'){
        $('#comment').text(Number(first_num) / Number(second_num));
      } 
      first_num = 0;
      second_num = 0;
      symbol = '';
    });
    $('#multiplication').click(function(){
      symbol = 'multiplication';
      second_num = first_num;
      first_num = 0;
    });
    $('#division').click(function(){
      symbol = 'division';
      second_num = first_num;
      first_num = 0;
    });
    $('#clear').click(function(){
      first_num = 0;
      second_num = 0;
      symbol = '';
      $('#comment').text(first_num);
    });
});
