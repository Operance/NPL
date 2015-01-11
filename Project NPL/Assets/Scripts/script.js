var newskin : GUISkin;
function Start()
{
	yield WaitForSeconds(25);
	Screen.lockCursor = false;
	Screen.showCursor = true;
	Application.LoadLevel("Title");
}
function OnGUI () 
{
	//GUI.Label(Rect(1,1,200,100),"Press ESC to exit the game");
	GUI.skin = newskin;
	GUI.Label(Rect(300,1,600,200),"Press Space to jump and left shift to sprint! YOU HAVE 25 SECONDS!");
}
	 