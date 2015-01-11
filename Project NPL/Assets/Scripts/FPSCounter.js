var frameCount = 0;
var dt = 0.0;
var fps = 0.0;
var updateRate = 4.0;  // 4 updates per sec.
var label : GUISkin;

static var canShow = false;
 
function Update()
{
    frameCount++;
    dt += Time.deltaTime;
    if (dt > 1.0/updateRate)
    {
        fps = frameCount / dt ;
        frameCount = 0;
        dt -= 1.0/updateRate;
    }
}

function OnGUI()
{
	GUI.skin = label;
	if(canShow == true)
	{
		GUI.Label(Rect(Screen.width - 200, Screen.height - 40, 200, 90),"Frames Per Second: " + fps);
	}
}