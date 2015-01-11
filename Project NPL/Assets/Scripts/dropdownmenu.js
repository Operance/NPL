var show = false;
var ts : TimerScript;
var chMotor : CharacterMotor;
var fpsc : FPSCounter;
var dsml : disablemouselook;
var label : GUISkin;
var maincam : Camera;
var player : Transform;

static var isPaused = false;

private var _playerMouseLook : MouseLook;



function OnGUI()
{
	GUI.skin = label;
	(GUI.Label(Rect(100,0,400,50),"Press backslash to access Dev Tools"));
	if(Input.GetKeyDown(KeyCode.Backslash))
	{
		show = true;
		isPaused = true;
  
		GetComponent(MouseLook).enabled = false;
		chMotor.canControl = false;
		ts.countTime = false;
		ts.cantime = false;
		Screen.lockCursor = false;
		Screen.showCursor = true;
	}

	if(show == true)
	{
		GUI.Box(Rect(100,60,300,420),"");
		if(GUI.Button(Rect(100,70,200,50),"High score to 0"))
		{
			PlayerPrefs.SetFloat("realhighscore", 0);
			PlayerPrefs.SetString('highscore',"0:00");
			
		}
		if(GUI.Button(Rect(200,120,200,50),"Decrease Graphics"))
		{
			QualitySettings.DecreaseLevel();
		}
		if(GUI.Button(Rect(100,170,200,50),"Increase Graphics"))
		{
			QualitySettings.IncreaseLevel();
		}
		if(GUI.Button(Rect(200,220,200,50),"Set AA to Max"))
		{
			QualitySettings.antiAliasing = 16;
		}
		if(GUI.Button(Rect(100,270,200,50),"Set AA to lowest"))
		{
			QualitySettings.antiAliasing = 0;
		}
		if(GUI.Button(Rect(200,320,200,50),"Show FPS"))
		{
			fpsc.canShow = true;
			
		}
		if(GUI.Button(Rect(100,370,200,50),"Close FPS"))
		{
			fpsc.canShow = false;
		}
		if(GUI.Button(Rect(200,420,200,50),"Close"))
		{
			show = false;
			dsml.start = true;
			chMotor.canControl = true;
			GetComponent(MouseLook).enabled = true;
     
			ts.countTime = true;
			ts.cantime = true;
			Screen.lockCursor = true;
			Screen.showCursor = false;
		}

		
		
	}
}
