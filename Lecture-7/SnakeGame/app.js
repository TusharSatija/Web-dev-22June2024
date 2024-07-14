const canvas=document.querySelector('canvas');
const pen=canvas.getContext('2d');
pen.fillStyle='yellow';


const cs=67;
const w=1200;
const h=735;
let food=null;
let score=0;


const snake={
    init_len:5,
    direction:'right',
    cells:[],

    createSnake:function(){
        for(let i=0;i<this.init_len;i++)
        {
            this.cells.push({
                x:i,
                y:0
            });
        }
    },

    drawSnake: function(){
        for(let cell of this.cells)
            pen.fillRect(cell.x*cs,cell.y*cs,cs-2,cs-2);
    },
    updateSnake:function()
    {
        console.log(this.cells[this.cells.length-1].x);
        const HeadX=this.cells[this.cells.length-1].x;
        const HeadY=this.cells[this.cells.length-1].y;

        let nextX;
        let nextY;

        if(HeadX===food.x && HeadY===food.y)
        {
            food=RandomFood();
            score++;
        }
        else{
            //remove from first cell (snake)
            this.cells.shift();
        }

        if(this.direction=='down')
        {
            nextX=HeadX;
            nextY=HeadY+1;

            if(nextY*cs>=h)
            {
                pen.fillStyle='red';
                pen.fillText('Game Over !!' ,200,200);
                clearInterval(id);
            }
        }

        else  if(this.direction=='up')
        {
            nextX=HeadX;
            nextY=HeadY-1;

            if(nextY*cs<0)
            {
                pen.fillStyle='red';
                pen.fillText('Game Over !!' ,200,200);
                clearInterval(id);
            }
        }
        else if(this.direction=='left')
        {
            nextX=HeadX-1;
            nextY=HeadY;

            if(nextX*cs<0)
            {
                pen.fillStyle='red';
                pen.fillText('Game Over !!' ,200,200);
                clearInterval(id);   
            }
        }
        else{
            nextX=HeadX+1;
            nextY=HeadY;
            if(nextX*cs>=w)
                {
                    pen.fillStyle='red';
                    pen.fillText('Game Over !!' ,200,200);
                    clearInterval(id);   
                }
        }

        this.cells.push({
            x:nextX,
            y:nextY
        });
    }
}

function update()
{
    snake.updateSnake();
}


function init()
{
    snake.createSnake();
  
    food=RandomFood();

    function keyPress(e)
    {
        if(e.key=='ArrowDown')
        {
            snake.direction='down'
        }
        else if(e.key=='ArrowUp')
        {
            snake.direction='up';
        }
        else if(e.key=='ArrowLeft')
        {
            snake.direction='left';
        }
        else{
            snake.direction='right';
        }
        console.log(snake.direction)
     

    }
    document.addEventListener('keydown',keyPress);
}
function draw(){
    pen.clearRect(0,0,w,h);
    pen.font='40px san-serif';
    pen.fillText(`score : ${score}`,100,80);
    pen.fillStyle='red';
    pen.fillRect(food.x*cs,food.y*cs,cs,cs);
    pen.fillStyle='yellow';
    snake.drawSnake();
}

function RandomFood()
{
    const foodx=Math.round((Math.random()*(w-cs)/cs));
    const foody=Math.round((Math.random()*(h-cs)/cs));

    food={
        x:foodx,
        y:foody
    }

    return food;
}
function gameLoop()
{
    draw();

    snake.updateSnake();
}
init();
// gameLoop();
const id=setInterval(gameLoop,500);
