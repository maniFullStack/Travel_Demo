function Person(fullname, favColor){
    this.name = fullname;
    this.color = favColor;

    this.greet = function(){
        console.log(this.name + "-" + this.color);
    }
}