//JavaScriptファイル

window.calc = {}

calc = {

	stack : null,

	init : function(){
		calc.stack = new Array();
		calc.stack.push(0);
	},

	pushStack : function(pressedButton) {

		switch(pressedButton){

			case '+' :
			case '-' :
			case '*' :
			case '/' :
				calc.stack.push(pressedButton);
				calc.stack.push(0);
				break;
			default :
				// Number
				var num = parseInt(pressedButton);
				var stackNum = calc.stack.pop();
				calc.stack.push((stackNum * 10) + num);
				break;
		}

	},

	execEqual : function(){

	}

	// test : function() {
	// 	calc.init();
	// 	calc.pushStack("1");
	// 	calc.pushStack("5");
	// 	calc.pushStack('+');
	// 	calc.pushStack("2");
	// 	calc.pushStack("3");

	// 	var str
	// 	for(var i = 0; i < calc.stack.length; i++) {
	// 		alert(calc.stack[i]);
	// 	}
	// 	return str;
	// }

}