var str;
var stack_of_obj=[];
var button_click=0;

var oreo_count=0;
var oreo_limit=3;

var startOreo_x;
var gen_value=true;

document.getElementById("page2").style.display="none";

var canvas = document.getElementById("canvas");
canvas.width=window.innerWidth-40;
canvas.height=window.innerHeight-75;
var ctx = canvas.getContext("2d");
ctx.strokeStyle="black";

ctx.lineWidth=3;

function start()
{
    document.getElementById("homePage").style.display="none";
    document.getElementById("page2").style.display="block";
}

function Stack(){
    stack_of_obj.length=0;
    str = document.getElementById("string").value;
    button_click++;
    for(var i=0; i<str.length; )
    {
        if(str[i]=="o")
        {
            stack_of_obj.push(new biscuit());
            i++;
            gen_value=true;
        }
        else if(str[i]=="r" && str[i+1]=="e")
        {
            stack_of_obj.push(new cream());
            i+=2;
            gen_value=true;
        }
        else{
            document.getElementById("string").value="Incorrect";
            gen_value=false;
            button_click--;
            break;
        }
    }
    console.log(stack_of_obj);

    if(gen_value==true)
    {
        draw_stack();
    }
}

function x_cordinate()
{    
    if(button_click==1)
    {
        return 300;
    }
    else if(button_click==2)
    {
        return 950;
    }
    else if(button_click==3)
    {
        return 1550;
    }
    else if(button_click>3)
    {
        document.getElementById("string").value="Limit Reached";
        document.getElementById("oo").disabled=true;
        gen_value=false;
    }
}

class biscuit{
    constructor(){
        this.x= x_cordinate();
        this.y= 600;
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
        this.x= x_cordinate();
        this.y= 600;
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

function draw_stack(){
    var stack_start=600;
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
            ctx.fillStyle="rgb(71,48,48)";
        }
        else{
            ctx.fillStyle="white";
        }
        stack_of_obj[j].draw();
    }
}