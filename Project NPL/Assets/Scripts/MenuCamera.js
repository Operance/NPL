private var xOff: float = 0;
private var yOff: float = 0;
private var pos;
var xTarget: float = 0;
var yTarget: float = 0;

function Start()
{
	pos = transform.position;
}

function Update () {
	xOff += (xTarget - xOff) / 16;
	yOff += (yTarget - yOff) / 16;
	transform.position = pos + Vector3(xOff, yOff, 0);
}