//Declare Checkpoints below as example: "check1", "check2"
static var CurrentCheckPoint;
static var checktele = false;
static var check1 = false;

var startAngle;


var check1pos : GameObject;

function Start()
{
	startAngle = transform.rotation;
}


function Update()
{
	if(check1 == true)
	{
		CurrentCheckPoint = check1pos.transform.position;
		
		Debug.Log("CHECKPOINT MADE!");
		Debug.Log(CurrentCheckPoint);
	}
	if(checktele == true)
	{
		tele();
		
	}
}

function tele()
{
	transform.position = CurrentCheckPoint;
	transform.rotation = startAngle;
}