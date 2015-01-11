static var plat : plat;

var canDo = true;

function OnTriggerEnter()
{
	if(canDo == true)
	{
		Debug.Log("TRIGGERED");
		plat.moveNow = true;
		Debug.Log("Huston, we have lift off!");
		yield WaitForSeconds(5);
		plat.moveNow = false;
		canDo = false;
	}
}