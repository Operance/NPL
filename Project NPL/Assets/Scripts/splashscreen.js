

function Start()
{
	
	yield WaitForSeconds(3.0);
	Screen.lockCursor = false;
	Screen.showCursor = true;
	Application.LoadLevel("Title");
}
