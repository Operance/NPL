//
//This script is purely cinematic. It tilts the camera slightly in the direction the player is moving.
//If Oculus Rift mode is ever supported, it is important that this script be turned off so as to not
//interfere with the camera (Which would induce sickness)
//

var toggled = true;		//A quick toggle
var tiltRunMod : float = 0.5;	//How much the camera tilts when the character moves on the horizontal plane
var tiltJumpMod : float = 1.5;	//How much the camera tilts when the character moves on the vertical plane

private var ch: CharacterController;
private var vel;

function Start () {
    ch = transform.parent.GetComponent(CharacterController);
    vel = Vector3(0, 0, 0);
}

function Update () {
	//Smoothly interpolate between velocity as it stands and the new velocity
	var relativeVel = transform.InverseTransformDirection(ch.velocity);
	var x : float = relativeVel.x * tiltRunMod;
	var y : float = relativeVel.y * tiltJumpMod;
	var z : float = relativeVel.z * (tiltRunMod / 2);
	vel = Vector3.Slerp(vel, Vector3(Mathf.Clamp(y + z, -20, 20), 0, 0), 0.1);
	
	if(toggled)
	{
		//Translate the velocity into camera mount's angle
		transform.localEulerAngles = vel;
	}
}