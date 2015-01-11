var amountY: float = 16;
var amountX: float = 32;
var rate: float = 0.5;

private var sine: float = 0;
private var off;

function Start()
{
	off = transform.localEulerAngles;
}

function Update()
{
	sine += rate * Time.deltaTime;
	if(sine >= Mathf.PI * 2)
	{
		sine -= Mathf.PI * 2;
	}
	
	transform.localEulerAngles = off + Vector3(Mathf.Sin(sine - (Mathf.PI / 2)) * amountX, Mathf.Sin(sine) * amountY, 0);
}