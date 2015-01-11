function OnTriggerEnter()
{
	Debug.Log(":LKJAS");
	yield WaitForSeconds(7);
	Application.LoadLevel("Title");
}