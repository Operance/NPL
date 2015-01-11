static var moveNow = false;
static var doIt = false;

function Update()
{
	if(moveNow == true)
	{	
		Debug.Log("Do it Dark 1");
		doIt = true;
		
	}
	if(doIt == true)
	{
		LiftOff();
	}
}
		
function LiftOff()
{
		Debug.Log("MOVING");
		transform.Translate(Vector3.up * Time.deltaTime * 5);
		yield WaitForSeconds(5);
		moveNow = false;
}		