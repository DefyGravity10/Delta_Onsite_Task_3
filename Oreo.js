var str;
var stack_of_obj=[];
var k=0;

var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.strokeStyle="black";

ctx.lineWidth=3;

class biscuit{
    constructor(){
        this.x= 500;
        this.y= 500;
        this.id= "b";
    }
    draw() {
        ctx.beginPath();
        ctx.ellipse(this.x,this.y,200,40,0,0,Math.PI*2);
        ctx.ellipse(this.x, this.y + 20,200,40,0,0,Math.PI*2);
        ctx.moveTo(this.x-200,this.y);
        ctx.lineTo(this.x-200, this.y + 20);
        
        ctx.moveTo(this.x+200,this.y+20);
        ctx.lineTo(this.x+200,this.y); 
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}

class cream{
    constructor(){
        this.x= 502;
        this.y= 500;
        this.id="c";
    }
    draw(){
        ctx.beginPath();
        ctx.ellipse(this.x,this.y,190,40,0,0,Math.PI*2);
        ctx.ellipse(this.x, this.y + 10,190,40,0,0,Math.PI*2);
        ctx.moveTo(this.x-190,this.y);
        ctx.lineTo(this.x-190, this.y + 10);
        ctx.moveTo(this.x+190,this.y+10);
        ctx.lineTo(this.x+190,this.y);   
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
            if(stack_of_obj[j].id=="b")
            {
                stack_start-=20;
            }
            else if(stack_of_obj[j].id=="c")
            {
                stack_start-=10;
            }
            
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