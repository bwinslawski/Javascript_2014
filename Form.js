(function($){
    $.fn.myPlugin = function(settings){
        var config = {
                        'background-color': '#b0c4de'
        };
        if (settings){$.extend(config, settings);}
		
		function myFunction()
	{     
				 $.getJSON( "kods.json", function( data ) {
			  var items = [];
			  var multipleValues = $( "#kod" ).val()
			 console.log("loo "+multipleValues);
			  var l = 0;
			  $.each( data, function( key, val ) {
			  
			  if (val["KOD POCZTOWY"]==multipleValues) {
			  l=1;
			 $( "#city" ).val(val["MIEJSCOW"]);
			 $( "#kod" ).removeClass( "error" );
				 }
			  });
			 if (l==0)
			 {
			 $( "#kod" ).addClass( "error" );
			 }
			 
			  });
			  
	}
	
	
	function isOkPass(p){
				var anUpperCase = /[A-Z]/;
				var aLowerCase = /[a-z]/; 
				var aNumber = /[0-9]/;
				var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
				var obj = {};
				obj.result = false;

				if(p.length < 8){
					obj.result=false;
					obj.error="Za krótkie hasło!"
					var inputElement = document.getElementById('password');
					var errorElement = document.getElementById('passwordError');
					var errorMsg="Za krótkie hasło!";
					showMessage(inputElement, errorMsg, errorElement);
					return obj;
				}else if (p.length > 20){
					obj.result=false;
					obj.error="Za długie hasło!"
					var inputElement = document.getElementById('password');
					var errorElement = document.getElementById('passwordError');
					var errorMsg="Za długie hasło!";
					showMessage(inputElement, errorMsg, errorElement);
					return obj;
				}
				else {

			  // console.log("kiki");
				var numUpper = 0;
				var numLower = 0;
				var numNums = 0;
				var numSpecials = 0;
				for(var i=0; i<p.length; i++){
					if(anUpperCase.test(p[i]))
						numUpper++;
					else if(aLowerCase.test(p[i]))
						numLower++;
					else if(aNumber.test(p[i]))
						numNums++;
					else if(aSpecial.test(p[i]))
						numSpecials++;
				}
				var l = 0 ; 
				if(numUpper > 1){l++;}
				if(numLower > 1){l++;}
				if(numNums > 1){l++;}
				if(numSpecials > 1){l++;}
				if (l > 2){
				obj.result=false;
				var inputElement = document.getElementById('password');
				var errorElement = document.getElementById('passwordok');
				var errorMsg="Wzorcowe hasło";
				showMessageP(inputElement, errorMsg, errorElement);}
				else if (l == 2){
				obj.result=false;
				var inputElement = document.getElementById('password');
				var errorElement = document.getElementById('passwordok');
				var errorMsg="Średnie hasło";
				showMessageP(inputElement, errorMsg, errorElement);}
				else if(l<2){
				obj.result=false;
				var inputElement = document.getElementById('password');
				var errorElement = document.getElementById('passwordok');
				var errorMsg="Słabe hasło";
				showMessageP(inputElement, errorMsg, errorElement);
				}
				}
				console.log(l);
				return obj;
    }
	
	function showMessageP(inputElement, errorMsg, errorElement) {
				  if (errorElement !== null) {
				  var errorrElement = document.getElementById('passwordError');
					 errorElement.innerHTML = errorMsg;
					 errorrElement.innerHTML = " ";
				  } else {
					 alert(errorMsg);
				  }
				  if (inputElement !== null) {
					 inputElement.className = "passwordok";
					 inputElement.focus();
				  }
	}
	
	function showMessage(inputElement, errorMsg, errorElement) {
			  if (errorElement !== null) {
			  var errorrElement = document.getElementById('passwordok');
				 errorElement.innerHTML = errorMsg;
				  errorrElement.innerHTML = " ";
			  } else {
				 alert(errorMsg);
			  }
			  if (inputElement !== null) {
				 inputElement.className = "error";
				 inputElement.focus();
			  }
	}
	
    function validation()
    {
	
				$( "#kod" ).removeClass( "error" );
				$( "#email" ).removeClass( "error" );
				$( "#name" ).removeClass( "error" );
				 var errorrElement = document.getElementById('emailError');
					 errorrElement.innerHTML = " ";
					 errorrElement = document.getElementById('nameError');
					errorrElement.innerHTML = " ";
					errorrElement = document.getElementById('passwordError');
					errorrElement.innerHTML = " ";
					errorrElement = document.getElementById('kodError');
					errorrElement.innerHTML = " ";

				
					var form =  document.getElementById('info-form'),
						rules = { // 1
							'name' : /^[a-z]{2,30} [a-z]{2,30}$/i,
							'email': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
							'kod': /^[0-9]{2}\-[0-9]{3}$/,
						};
			 
					for (var elem in rules) // 2
					{
						if (form[elem])
						{
							if (!rules[elem].test(form[elem].value)) // 3
							{
								var inputElement = document.getElementById(elem);
								var errorElement = document.getElementById(elem + "Error");
								var errorMsg="nieprawidłowa wartość";
								showMessage(inputElement, errorMsg, errorElement);
							   // form[elem].style.background = 'red';
								return false;
							}
							else
							{
								form[elem].style.background = '';
							}
						}
					}
					var haslo = document.getElementById('password').value
					isOkPass(haslo);
				 return false;
    }
		
		
		
        return this.each(function(){
                $(this).on('keydown', function(){
				
				
				validation();
				myFunction();
				
			           });
         });
    };
 
})(jQuery);	
				
	
	