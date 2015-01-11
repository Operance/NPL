static var teleport = false;
var wallRun = false;
var wallRunLeft = false;
var wallRunRight = false;
static var wallClimb = false;
static var zipline = false;
static var ziplineStart : Transform;
static var ziplineEnd : Transform;
static var ziplineInstance;
static var zipYPrev : float = 0;
var zipVel : float = 0;
var zipJump : float = 0;
var zipJumpVel : float = 0;

private var source : AudioSource;
var clip : AudioClip;

var maxZipSpeed : float = 100;
var runSpeed = 4;
var climbSpeed = 15;


var chMotor: CharacterMotor;
var ch: CharacterController;
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
	
	source = gameObject.AddComponent("AudioSource") as AudioSource;
	
	source.clip = clip;
	source.Play();
	source.loop = true;
	source.pitch = 0;
	source.volume = 0;
}

function Update()
{
	if(zipJump > 0)
	{
		zipJump -= Time.deltaTime;
	}
	
	if(teleport == true)
	{
		tele();
	}
	
	chMotor.movement.gravity = g;
	if(wallRun == true && !ch.isGrounded)
	{
		WallRun();
	}
	wallRun = false;
	
	if(wallClimb == true && !ch.isGrounded)
	{
		WallClimb();
	}
	/*
	if(zipline == true)
	{
		Zipline();
	}
	else
	{
		zipYPrev = transform.position.y;
		zipVel /= 1.1;
	}
	source.volume = zipVel / 50 / Time.deltaTime;
	*/
	
	if(zipJumpVel > 0)
	{
		zipJumpVel -= 2 * Time.deltaTime;
	}
	if(zipJumpVel < 0)
	{
		zipJumpVel = 0;
	}
}

function FixedUpdate()
{
	if(zipline == true && zipJump <= 0)
	{
		if(zipVel == 0)
		{
			zipVel = chMotor.movement.velocity.magnitude;
		}
		Zipline();
		if(Input.GetButton("Jump"))
		{
			zipline = false;
			zipJump = 0.25;
			zipJumpVel = 20;
			//ch.Move(transform.up * 5);
			//chMotor.SetVelocity((((ziplineEnd.position - ziplineStart.position).normalized * zipVel) + Vector3(0, 5000, 0)));
		}
		else
		{
			zipJumpVel = 0;
		}
	}
	else
	{
		zipYPrev = transform.position.y;
		if(zipVel != 0)
		{
			chMotor.SetVelocity(((ziplineEnd.position - ziplineStart.position).normalized * (zipVel / 2)) + Vector3(0, zipJumpVel));
		}
		zipVel = 0;
	}
	source.volume = zipVel / 25 / Time.deltaTime;
}

function tele()
{
	transform.position = startPos;
	transform.rotation = startAngle;
	
	teleport = false;
}

function WallRun()
{
	//I cut these values in half
	chMotor.movement.gravity = (g / 2) / 1.2;
	ch.Move(-transform.forward * Time.deltaTime * (runSpeed / 10) / 2);
}
function WallClimb()
{
	//Debug.Log("CLIMB WALL");
	chMotor.movement.gravity = g / 8;
	ch.Move(transform.up * Time.deltaTime * climbSpeed);
}
function Zipline()
{
	transform.position = Vector3(transform.position.x, zipYPrev, transform.position.z);
	chMotor.SetVelocity(Vector3(0, 10 * Time.deltaTime, 0));
	
	if(ziplineEnd.position.y <= ziplineStart.position.y)
	{
		zipVel += 0.25;
	}
	else
	{
		zipVel = 25;
	}
	
	/*
	if(zipVel > maxZipSpeed)
	{
		zipVel = maxZipSpeed;
	}*/
	
	source.pitch = zipVel / 15;
	
	//ch.Move(((ziplineEnd.position + Vector3(0, -2, 0)) - transform.position).normalized * zipVel * Time.deltaTime);
	ch.Move(((ziplineEnd.position + Vector3(0, -2, 0)) - transform.position).normalized * zipVel * Time.deltaTime);
	
	zipYPrev = transform.position.y;
}