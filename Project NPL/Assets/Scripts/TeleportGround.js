private var t : PlayerScript;
private var t2 : AIScript;
private var CheckPoint : CheckPoint;

static var CheckPointReached = false;


function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player" && CheckPointReached == false)
	{
		t.teleport = true;
	}
	if(collider.tag == "Player" && CheckPointReached == true)
	{
		CheckPoint.checktele = true;
	}
	if(collider.tag == "AI")
	{
		t2.teleport = true;
	}
	//Debug.Log("WORKED");
}