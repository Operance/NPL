static var teleport = false;
static var wallRun = false;
static var wallClimb = false;


var runSpeed = 4;
var climbSpeed = 15;


private var chMotor: CharacterMotor;
private var ch: CharacterController;
private var g: float;

private var startPos;
private var startAngle;

function Start()
{
	startPos = transform.position;
	startAngle = transform.rotation;
	
	chMotor = GetComponent(CharacterMotor);
	ch = GetComponent(CharacterController);
	g = chMotor.movement.gravity;
}

function Update()
{
	if(teleport == true)
	{
		Debug.Log("HEY!");
		tele();
	}
	 
	chMotor.movement.gravity = g;
	if(wallRun == true && !ch.isGrounded)
	{
		WallRun();
		Debug.Log("WALL RUN");
	}
	if(wallClimb == true && !ch.isGrounded)
	{
		WallClimb();
	}
}

function tele()
{
	transform.position = startPos;
	transform.rotation = startAngle;
	
	teleport = false;
}

function WallRun()
{
	
	chMotor.movement.gravity = g / 2;
	ch.Move(transform.forward * Time.deltaTime * runSpeed);
	Debug.Log("WALL RAN!");
}
function WallClimb()
{
	Debug.Log("CLIMB WALL");
	chMotor.movement.gravity = g / 8;
	ch.Move(transform.up * Time.deltaTime * climbSpeed);
}
