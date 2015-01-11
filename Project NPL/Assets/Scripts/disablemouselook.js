static var stop = false;
static var start = false;
static var isPaused = false;

var main : Camera;


function Update()
{
	if(Input.GetKeyDown(KeyCode.Backslash && isPaused == false))
	{
		GetComponent(MouseLook).enabled = false;

		
	}
	if(Input.GetKeyDown(KeyCode.Backslash && isPaused))
	{
		GetComponent(MouseLook).enabled = true;
	}
}