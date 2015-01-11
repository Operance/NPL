private var startTime;
static var textTime : String; //added this member variable here so we can access it through other scripts
//var Target : DropNow;
static var isSearch = false;
static var countTime = true;
static var showfinalTime = false;
static var canSub = false;
static var isVersus = false;
static var isTimeT =false;
static var cantime = false;
static var showMenu = false;
static var showGUIMenu = false;
static var chmotor : CharacterMotor;
static var hideGUIMenu = true;
static var showGMenu = false;

var labelskin : GUISkin;
var finallabel : GUISkin;
var newskin : GUISkin;
var ml : MouseLook;
var valuetime : float;
var dlcurrenthighscore : float;
var dl2currenthighscore : float;
var scurrenthighscore : float;
var vcurrenthighscore : float;
var numbofboxes = 9;
var fraction = 0;
var sec : float = 0;
var intsec :int;
var minutes = 0;
var seconds;
var time;


var canCountDown = true;
var countDown : float = 5;

var ais : GameObject[];



function Start()
{
	startTime = Time.time;
	//This is the high score 
	// Will be updated to fetch the versus and search high scores
	dlcurrenthighscore = PlayerPrefs.GetFloat('realhighscore');
	dl2currenthighscore = PlayerPrefs.GetFloat('dl2realhighscore');
	
	Debug.Log(dlcurrenthighscore);
}
function Update()
{
	if(Input.GetKeyDown(KeyCode.Y))
	{
		dlcurrenthighscore = 100.00;
		Debug.Log(dlcurrenthighscore);
	}
	if(cantime == true)
	{
		sec = sec + Time.deltaTime;
		intsec = sec;
	
		if(intsec < 10)
		{
			seconds = "0"+intsec;
		}
		else
		{
			seconds = intsec;
		}
		if(intsec >= 60)
		{
			minutes++;
			sec=0;
		}
	
		time = minutes + ":" + seconds;
	}

	if(canCountDown)
		{
			GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = false;
			for(var i = 0; i < ais.length; i ++)
			{
				ais[i].GetComponent(CharacterMotor).enabled = false;
				ais[i].GetComponent(AiRunner).enabled = false;
			}
		
			countDown -= Time.deltaTime;
			if(countDown <= 0)
			{
				GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = true;
				for(i = 0; i < ais.length; i ++)
				{
					ais[i].GetComponent(CharacterMotor).enabled = true;
					ais[i].GetComponent(AiRunner).enabled = true;
				}
				startTime = Time.time;
				cantime = true;
				canCountDown = false;
			}
			if(Input.GetKeyDown(KeyCode.F12))
			{
				Screen.lockCursor = false;
				Screen.showCursor = true;
			}

	}
		
			
	if(cantime == true)
	{
		valuetime += Time.deltaTime;
		Debug.Log(valuetime);
	}
	if(Input.GetKeyDown(KeyCode.Escape))
		{
			showGUIMenu = true;
			hideGUIMenu = false;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = false;
			GameObject.FindWithTag("Player").GetComponent(MouseLook).enabled = false;
			GameObject.FindWithTag("MainCamera").GetComponent(MouseLook).enabled = false;
			cantime = false;
			//Application.Quit();
			//Application.LoadLevel("Title");
			
			
		
		}
		//Can tell when a box in Search is grabbed to subtract the number of boxes left (For Search only)
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
	//Debug.Log(showGUIMenu);
	if(showGUIMenu == true)
	{
		GUI.Box(Rect(Screen.width/2-150, Screen.height/2-250, 500, 500), "Menu");
		if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2-200, 250, 100), "Resume"))
		{
			Screen.lockCursor = true;
			Screen.showCursor = false;
			GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = true;
			GameObject.FindWithTag("Player").GetComponent(MouseLook).enabled = true;
			GameObject.FindWithTag("MainCamera").GetComponent(MouseLook).enabled = true;
			showGUIMenu = false;
			cantime = true;
		}
		if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2-100, 250, 100), "Graphics"))
		{
			showGUIMenu = false;
			showGMenu = true;
		}
	    if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2+50, 250, 100), "Quit"))
		{
			Screen.lockCursor = false;
			Screen.showCursor = true;
			GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = true;
			GameObject.FindWithTag("Player").GetComponent(MouseLook).enabled = true;
			GameObject.FindWithTag("MainCamera").GetComponent(MouseLook).enabled = true;
			showGUIMenu = false;
			cantime = true;
			Application.LoadLevel("Title");
		}
		
			
	}
	
	if(showGMenu == true)
	{
		GUI.Box(Rect(Screen.width/2-150, Screen.height/2-250, 500, 500), "Graphics");
		 if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2-200, 250, 100), "Increase Graphics")) 
		 {
		 	QualitySettings.IncreaseLevel();
		 }
		 if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2-100, 250, 100), "Decrease Graphics")) 
		 {
		 	QualitySettings.DecreaseLevel();
		 }
		 if(GUI.Button(Rect(Screen.width/2+100, Screen.height/2-200, 250, 100), "8x AA")) 
		 {
		 	 QualitySettings.antiAliasing = 8;
		 }
		 if(GUI.Button(Rect(Screen.width/2+100, Screen.height/2-100, 250, 100), "AA Off")) 
		 {
		 	 QualitySettings.antiAliasing = 0;
		 }
		 if(GUI.Button(Rect(Screen.width/2-150, Screen.height/2+50, 250, 100), "Resume"))
		{
			Screen.lockCursor = true;
			Screen.showCursor = false;
			GameObject.FindWithTag("Player").GetComponent(CharacterMotor).enabled = true;
			GameObject.FindWithTag("Player").GetComponent(MouseLook).enabled = true;
			GameObject.FindWithTag("MainCamera").GetComponent(MouseLook).enabled = true;
			showGMenu = false;
			cantime = true;
		}
		 

	}

	if(isSearch)
	{
		GUI.Label(Rect(1400,1,200,100),"Boxes Left: "+ numbofboxes);
	}
	 
 	if(cantime == true)
 	{
   		var guiTime = Time.time - startTime;
 
   		var minutes : int = guiTime / 120;
   		var seconds : int = guiTime % 60;
   		var fraction : int = (guiTime * 100) % 100;
 
   		textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction);
   	
   		//Disabled by Hans to prevent clogging of the debug log
   		//Debug.Log(textTime);
   	}
   	if(canCountDown)
   	{
   		time = String.Format("{0}", Mathf.Ceil(countDown));
   	}
   	GUI.skin = labelskin; 
   	GUI.Label (Rect (0, 1, 100, 30), time);
   	
   	
	if(showfinalTime == true)
	{
		GUI.skin = finallabel;
		GUI.Label(Rect(200,220,300,300),"Your Final Time: " + time);
		cantime = false;
		
		savehighScore();
		Quit();
	
			
	}
	
	
}
function hide()
{
	showGUIMenu = false;
}
//This function saves the scores and compares them to determine if a high score has been achieved
function savehighScore()
{
	if(valuetime < dlcurrenthighscore && !isSearch)
	{
		PlayerPrefs.SetFloat('savedscore',valuetime);
		PlayerPrefs.SetString('highscore',time);
		PlayerPrefs.SetFloat('realhighscore',valuetime);
		Debug.Log("Beat the old score!");
	}
	if(dlcurrenthighscore == 0.00 && !isSearch)
	{
		//Debug.Log("NEW HIGH SCORE!");
		PlayerPrefs.SetFloat('savedscore',valuetime);
		PlayerPrefs.SetString('highscore',time);
		PlayerPrefs.SetFloat('realhighscore',valuetime);
	}
	
	if(valuetime > dlcurrenthighscore && !isSearch)
	{
		Debug.Log("NOTHING");
		return;
	}
		if(valuetime < dl2currenthighscore && !isSearch)
	{
		PlayerPrefs.SetFloat('dl2savedscore',valuetime);
		PlayerPrefs.SetString('dl2highscore',time);
		PlayerPrefs.SetFloat('dl2realhighscore',valuetime);
		//Debug.Log("Beat the old score!");
	}
	if(dl2currenthighscore == 0.00 && !isSearch)
	{
		//Debug.Log("NEW HIGH SCORE!");
		PlayerPrefs.SetFloat('dl2savedscore',valuetime);
		PlayerPrefs.SetString('dl2highscore',time);
		PlayerPrefs.SetFloat('dl2realhighscore',valuetime);
	}
	
	if(valuetime > dl2currenthighscore && !isSearch)
	{
		//Debug.Log("NOTHING");
		return;
	}
		if(valuetime < scurrenthighscore && isSearch)
	{
		PlayerPrefs.SetFloat('searchsavedscore',valuetime);
		PlayerPrefs.SetString('shighscore',time);
		PlayerPrefs.SetFloat('srealhighscore',valuetime);
		//Debug.Log("Beat the old score!");
	}
	if(scurrenthighscore == 0.00 && isSearch)
	{
		//Debug.Log("NEW HIGH SCORE!");
		PlayerPrefs.SetFloat('searchsavedscore',valuetime);
		PlayerPrefs.SetString('shighscore',time);
		PlayerPrefs.SetFloat('srealhighscore',valuetime);
	}
	if(valuetime > scurrenthighscore && isSearch)
	{
		//Debug.Log("NOTHING");
		return;
	}
	//These will be turned into wins and losses for Versus
	if(valuetime < vcurrenthighscore && isVersus)
	{
		PlayerPrefs.SetFloat('vsavedscore',valuetime);
		PlayerPrefs.SetString('vhighscore',time);
		PlayerPrefs.SetFloat('vrealhighscore',valuetime);
		//Debug.Log("Beat the old score!");
	}
	if(vcurrenthighscore == 0.00 && isVersus)
	{
		//Debug.Log("NEW HIGH SCORE!");
		PlayerPrefs.SetFloat('vsavedscore',valuetime);
		PlayerPrefs.SetString('vhighscore',time);
		PlayerPrefs.SetFloat('vrealhighscore',valuetime);
	}
	if(valuetime > vcurrenthighscore && isVersus)
	{
		//Debug.Log("NOTHING");
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
	//Debug.Log("BACK TO MAIN MENU");
	
}