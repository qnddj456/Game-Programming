var my_job = "사장";


switch (my_job) {
    case "사장":
        money = 100000;
    break;
    
    case "아르바이트":
        money = 50000;
    break;

    case "학생":
        money = 20000;
    break;

    default:
        money = 1000;
    break;
};

document.writeln("");
document.writeln("현재 금액 : " + money);