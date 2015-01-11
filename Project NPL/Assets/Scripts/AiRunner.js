#pragma strict
 
var waypoint : Transform[];            // The amount of Waypoint you want
var patrolSpeed : float = 3;        // The walking speed between Waypoints
var loop : boolean = true;          // Do you want to keep repeating the Waypoints
var dampingLook = 6.0;              // How slowly to turn
var pauseDuration : float = 0;      // How long to pause at a Waypoint

//@HideInInspector
static var autoJump = false;
static var jumpStall = false;

private var curTime : float;
static var currentWaypoint : int = 0;
private var character : CharacterController;
private var charMotor : CharacterMotor;
private var t : AIScript;

static var moveSpeed = 0;

private var i = 0;
 
function Start(){
    character = GetComponent(CharacterController);
    charMotor = GetComponent(CharacterMotor);
    t = GetComponent(AIScript);
}
 
function Update(){
 
    if(currentWaypoint < waypoint.length){
        patrol();
        }else{
    if(loop){
        currentWaypoint=0;
        } 
    }
    if(autoJump)
    {
    	jump();
    }
    
    if(jumpStall)
    {
    	stall();
    }
    else
    {
    	moveSpeed = patrolSpeed;
    }
}
 
function patrol(){
 
        var target : Vector3 = waypoint[currentWaypoint].position;
        target.y = transform.position.y; // Keep waypoint at character's height
        var moveDirection : Vector3 = target - transform.position;
 
    if(moveDirection.magnitude < 0.5){
        if (curTime == 0)
            curTime = Time.time; // Pause over the Waypoint
        if ((Time.time - curTime) >= pauseDuration){
            currentWaypoint++;
            curTime = 0;
        }
    }else{        
        var rotation = Quaternion.LookRotation(target - transform.position);
        transform.rotation = Quaternion.Slerp(transform.rotation, rotation, /*Time.deltaTime * */dampingLook);
        character.Move(moveDirection.normalized * moveSpeed * Time.deltaTime);
    }   
}

function jump()
{
	if(charMotor.grounded)
	{
		charMotor.SetVelocity(charMotor.jumping.jumpDir * charMotor.CalculateJumpVerticalSpeed (charMotor.jumping.baseHeight + charMotor.jumping.extraHeight));
	}
	autoJump = false;
}

function stall()
{
	if(!charMotor.grounded && t.wallRun == false)
	{
		if(moveSpeed > patrolSpeed / 2)
		{
			moveSpeed = patrolSpeed / 1.5;
		}
	}
	if(charMotor.grounded)
	{
		if(moveSpeed != patrolSpeed)
		{
			moveSpeed = patrolSpeed;//*= 1.2;
		}
	}
}