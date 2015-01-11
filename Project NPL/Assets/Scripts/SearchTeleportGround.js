private var t : SearchPlayerScript;
private var t2 : AIScript;

function OnTriggerEnter(collider : Collider)
{
	Debug.Log("ENTERED");
	if(collider.tag == "Player")
	{
		Debug.Log("TELE");
		t.teleport = true;
	}
	if(collider.tag == "AI")
	{
		t2.teleport = true;
	}
	//Debug.Log("WORKED");
}