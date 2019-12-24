
//
for (var string='#';string.length<=7;){
    console.log(string+"\n")
    string+='#'
}

for (var number=1;number<=100;number++){
    if(number%3==0&&number%5==0){
        console.log("FizzBuzz")
    }else if(number%5==0&&number%3!=0){
        console.log("Buzz")
    }else if(number%5!=0&&number%3==0){
        console.log("Fizz")
    }else console.log(number)
}

var row,culunm
var size=8
var string="\n"
for (row=1;row<=size;row++){
    for (culunm=1;culunm<=size;culunm++) {
        if((culunm+row)%2==1){
            string=string+"#"
        }else {
            string=string+" "
        }
    }
    string+='\n'
}