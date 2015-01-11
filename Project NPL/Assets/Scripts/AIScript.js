static var teleport = false;
static var wallRun = false;
var runSpeed = 2;

private var chMotor: CharacterMotor;
private var ch: CharacterController;
private var g: float;
private var t: AiRunner;

private var startPos;
private var startAngle;

function Start()
{
	startPos = transform.position;
	startAngle = transform.rotation;
	
	chMotor = GetComponent(CharacterMotor);
	ch = GetComponent(CharacterController);
	g = chMotor.movement.gravity;
	t = GetComponent(AiRunner);
}

function Update()
{
	if(teleport == true)
	{
		tele();
	}
	 
	chMotor.movement.gravity = g;
	if(wallRun == true && !ch.isGrounded)
	{
		WallRun();
	}
}

function tele()
{
	transform.position = startPos;
	transform.rotation = startAngle;
	teleport = false;
	t.currentWaypoint = 0;
}

function WallRun()
{
	chMotor.movement.gravity = g / 2;
	ch.Move(transform.forward * Time.deltaTime * runSpeed);
}