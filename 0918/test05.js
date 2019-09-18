function Animal(name) {
    this.name = name;
}

Animal.prototype.Talk = function() {
    document.writeln("<br>나의 이름은 " + this.name + "입니다.");
}

var monkey = new Animal("원숭이");
var bird = new Animal("새");

monkey.Talk();
bird.Talk(0);