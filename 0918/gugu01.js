var input;

alert("자바 스크립트 대화상자");
input = prompt("원하시는 단을 입력");

for(; input < 10; i++) {
    document.writeln(input +  "단" + "<br>");
    for (var j = 1; j < 10; j++) {
        document.writeln( input + " x " + j + " = " + input*j +"<br>");
    };
    document.writeln("<br>");
};