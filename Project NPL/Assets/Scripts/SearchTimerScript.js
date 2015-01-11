private var startTime;
static var textTime : String; //added this member variable here so we can access it through other scripts
//var Target : DropNow;
static var countTime = true;
static var showfinalTime = false;
static var numbofboxes :int = 7;
static var canSub = false;


var labelskin : GUISkin;
var finallabel : GUISkin;
var newskin : GUISkin;
var ml : MouseLook;
var valuetime : float;
var cantime = true;
var currenthighscore : float;

function Start()
{
	currenthighscore = PlayerPrefs.GetFloat('searchhighscore');
	Debug.Log(currenthighscore);
}
function Update()
{
	if(cantime == true)
	{
		valuetime += Time.deltaTime;
	}
	if(Input.GetKeyDown(KeyCode.Escape))
		{
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Application.LoadLevel("Title");
			
			
		
		}
	if(canSub == true)
	{
		numbofboxes--;
		canSub = false;
	
	}
	if(numbofboxes == 0)
	{
		Quit();
		
	}
}

 
function Awake() {
	Screen.showCursor = false;
	if(countTime == true)
	{
 
   		startTime = Time.time;
   		   	
   	}
 
}
 
function OnGUI () {
	//GUI.Label(Rect(1,1,200,100),"Press ESC to exit the game");
	GUI.skin = newskin;
	GUI.Label(Rect(1400,1,200,100),"Boxes Left: "+ numbofboxes);
	
	 
 	if(countTime == true)
 	{
   		var guiTime = Time.time - startTime;
 
   		var minutes : int = guiTime / 120;
   		var seconds : int = guiTime % 60;
   		var fraction : int = (guiTime * 100) % 100;
 
   		textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction);
   		GUI.skin = labelskin; 
   		GUI.Label (Rect (0, 1, 100, 30), textTime);
   		//Disabled by Hans to prevent clogging of the debug log
   		//Debug.Log(textTime);
   	}
	if(showfinalTime == true)
	{
		GUI.skin = finallabel;
		GUI.Label(Rect(200,220,300,300),"Your Final Time: " + textTime);
		cantime = false;
		
		savehighScore();
		Quit();
	
			
	}
	
	
}
function savehighScore()
{
	if(valuetime < currenthighscore)
	{
		PlayerPrefs.SetFloat('searchscore',valuetime);
		PlayerPrefs.SetString('shighscore',textTime);
		PlayerPrefs.SetFloat('searchhighscore',valuetime);
		Debug.Log("Beat the old score!");
	}
	if(currenthighscore == 0.00)
	{
		Debug.Log("NEW HIGH SCORE!");
		PlayerPrefs.SetFloat('searchscore',valuetime);
		PlayerPrefs.SetString('shighscore',textTime);
		PlayerPrefs.SetFloat('searchhighscore',valuetime);
	}
	if(valuetime > currenthighscore)
	{
		Debug.Log("NOTHING");
		return;
	}
}

function Quit()
{
	yield WaitForSeconds(3);
	Screen.lockCursor = false;
	Screen.showCursor = true;
	countTime = true;
	showfinalTime = false;
	Application.LoadLevel("Title");
	Debug.Log("BACK TO MAIN MENU");
	
}