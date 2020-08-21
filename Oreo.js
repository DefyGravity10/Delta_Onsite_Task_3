var str;
var stack_of_obj=[];
var k=0;

var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.strokeStyle="black";


class biscuit{
    constructor(){
        this.x= 500;
        this.y= 500;
        this.id= "b";
    }
    draw() {
        ctx.beginPath();
        ctx.rect(this.x,this.y,200,10);
        ctx.stroke();
        ctx.fill();
    }
}

class cream{
    constructor(){
        this.x= 505;
        this.y= 490;
        this.id="c";
    }
    draw(){
        ctx.rect(this.x,this.y,190,5);
        ctx.fill();
        ctx.stroke();
    }
}

function Stack(){
    stack_of_obj.length=0;
    str = document.getElementById("string").value;
    for(var i=0; i<str.length; )
    {
        if(str[i]=="o")
        {
            stack_of_obj.push(new biscuit());
            i++;
        }
        else if(str[i]=="r" && str[i+1]=="e")
        {
            stack_of_obj.push(new cream());
            i+=2;
        }
        k++;
    }
    console.log(stack_of_obj);

    draw_stack();
}

function draw_stack(){
    var stack_start=500;
    for(var j=0; j<stack_of_obj.length; j++)
    {
        if(j!=0)
        {
            stack_start-=20;
            stack_of_obj[j].y=stack_start;
        }

        if(stack_of_obj[j].id=="b")
        {
            ctx.fillStyle="brown";
        }
        else{
            ctx.fillStyle="white";
        }
        stack_of_obj[j].draw();
    }
}