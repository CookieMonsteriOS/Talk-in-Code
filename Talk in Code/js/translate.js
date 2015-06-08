$(document).ready(function(){

translate();   
setUpTwitter();

});

function translate(){

   $("#inputText").keyup(function(){
          		
   	var translator = new MorseCodeTranslator(),

	textIn = $('#inputText').val();
    textOut = $('#morseCode').val();
    
    textOut = translator.toMorseCode(textIn);
    
    $('#morseCode').val(textOut); 	

    });

}


function setUpTwitter(){

$('#Twitter').click(function(){

	var morseCodeText = $('#morseCode').val();
     
		//Additonal messages 
	var message = "  Translated at www.talkincode.com  ";

	//Build string url 
	var twtURL = 'http://twitter.com/home?status=' +encodeURIComponent( morseCodeText + message);

	window.open(twtURL,'_blank');


 });

}




