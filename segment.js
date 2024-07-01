class Segment
{
    constructor(x, y, _len, _angle)
    {
        this.start = createVector(x, y);
        this.end = createVector(0, 0);
        this.len = _len;
        this.angle = _angle;
    }
    show ()
    {
        strokeWeight(7);
        point(this.start.x, this.start.y);
        strokeWeight(4);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }
    follow(tx, ty)
    {
        let dir = createVector(tx - this.end.x, ty - this.end.y);
        this.angle = atan2(dir.y, dir.x);
        this.start.set(tx, ty);
        this.calculate_end();
    }
    calculate_end()
    {
        const dx = cos(this.angle) * this.len;
        const dy = sin(this.angle) * this.len;
        this.end = createVector(this.start.x - dx, this.start.y - dy);
    }
}