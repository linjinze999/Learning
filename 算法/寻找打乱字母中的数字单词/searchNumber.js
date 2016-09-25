function numberSearch(str){
	var number = ['zero','one','two','three','four','five','six','seven','eight','nine'];
	var firstSearch = {'z':0,'w':2,'u':4,'x':6,'g':8};
	var secondSearch = {'o':1,'r':3,'f':5,'s':7};
	var thirdSearch = {'n':9};
	var strNumbers = [];
	for(var key in firstSearch){
		while(str.indexOf(key) !== -1){
			for(var i = 0; i < number[ firstSearch[key] ].length; i++){
				var p = str.indexOf( number[ firstSearch[key] ].charAt(i) );
				str = str.substring( 0, p ) + str.substring( p + 1, str.length );
			}
			strNumbers.push( firstSearch[key] + '' );
		}
	}
	for(var key in secondSearch){
		while(str.indexOf(key) !== -1){
			for(var i = 0; i < number[ secondSearch[key] ].length; i++){
				var p = str.indexOf( number[ secondSearch[key] ].charAt(i) );
				str = str.substring( 0, p ) + str.substring( p + 1, str.length );
			}
			strNumbers.push( secondSearch[key] + '' );
		}
	}
	for(var key in thirdSearch){
		while(str.indexOf(key) !== -1){
			for(var i = 0; i < number[ thirdSearch[key] ].length; i++){
				var p = str.indexOf( number[ thirdSearch[key] ].charAt(i) );
				str = str.substring( 0, p ) + str.substring( p + 1, str.length );
			}
			strNumbers.push( thirdSearch[key] + '' );
		}
	}
	strNumbers.sort();
	var result = strNumbers.join('');
	return result;
}
console.log( numberSearch('ontnothrvesuonerettwoixseeeightefowghfiveneiine') );