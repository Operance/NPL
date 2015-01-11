#pragma strict
private var wallRunLeanAmount = 10;
static var lean : float = 0;
static var leanTarget : float = 0;

private var ps: PlayerScript;
private var ch: CharacterController;
private var tiltRunMod : float = 1;

function Start () {
	ps = transform.parent.transform.parent.transform.parent.GetComponent(PlayerScript);
	ch = transform.parent.transform.parent.transform.parent.GetComponent(CharacterController);
}

function Update () {
	var relativeVel = transform.InverseTransformDirection(ch.velocity);
	var x : float = relativeVel.x * tiltRunMod;
	
	
	leanTarget = 0;
	
	if(/*ps.wallRun && */!ch.isGrounded)
	{
		if(ps.wallRunRight)
			leanTarget = wallRunLeanAmount;
		if(ps.wallRunLeft)
			leanTarget = -wallRunLeanAmount;
	}
	
	//lean += (leanTarget - lean) / 64;
	lean += (leanTarget - lean) / 16;
	
	transform.localEulerAngles = Vector3(0, 0, lean);
}