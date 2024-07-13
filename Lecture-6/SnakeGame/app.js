const canvas=document.querySelector('canvas');
const pen=canvas.getContext('2d');
pen.fillStyle='yellow';


const cs=67;
const w=1200;
const h=735;


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

        if(this.direction=='down')
        {
            nextX=HeadX;
            nextY=HeadY+1;
        }

        else  if(this.direction=='up')
        {
            nextX=HeadX;
            nextY=HeadY-1;
        }
        else if(this.direction=='left')
        {
            nextX=HeadX-1;
            nextY=HeadY;
        }
        else{
            nextX=HeadX+1;
            nextY=HeadY;
        }

        this.cells.push({
            x:nextX,
            y:nextY
        });
    }
}


function init()
{
    snake.createSnake();
    snake.drawSnake();

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
    snake.drawSnake();
}
function gameLoop()
{
    draw(); 
    snake.updateSnake();
}
init();
// gameLoop();
setInterval(gameLoop,500);
