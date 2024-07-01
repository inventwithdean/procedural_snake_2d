let segments = [];
let count = 20;
let len = 10;
function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(255);
    for (let i=0; i<count; i++)
    {
        segments.push(new Segment(10, 10, len, 0));
    }
}

function draw()
{
    background(255);
    segments[0].follow(mouseX, mouseY);
    for (let i=1; i<count; i++)
    {
        segments[i].follow(segments[i-1].end.x, segments[i-1].end.y);
    }
    for (let i=0; i<count; i++)
    {
        segments[i].show();
    }
}