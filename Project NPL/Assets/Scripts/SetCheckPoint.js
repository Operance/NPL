static var CheckPoint : CheckPoint;
private var TeleportGround : TeleportGround;



function OnTriggerEnter(collider : Collider)
{
	Debug.Log("ENTERED!");
	Debug.Log("Yep, thats the player for sure");
	CheckPoint.check1 = true;
	Debug.Log("check1 should be true");
	TeleportGround.CheckPointReached = true;
	Debug.Log("CheckReached should be true");
	
}