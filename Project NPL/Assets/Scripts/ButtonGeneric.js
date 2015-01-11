private var hoverSound : AudioClip;
private var clickSound : AudioClip;
private var cam : MenuCamera;

var targetX: float;
var targetY: float;

function Start()
{
	hoverSound = Resources.Load("two_tone_nav", AudioClip);
	clickSound = Resources.Load("two_tone_nav_reverse", AudioClip);
	cam = GameObject.Find("Main Camera").GetComponent(MenuCamera);
}

function OnMouseEnter()
{
	renderer.material.color = Color.yellow;
	
	audio.clip = hoverSound;
	audio.Play();
}
 
function OnMouseExit()
{ 
	renderer.material.color = Color.white;
}

function OnMouseUp()
{
	if(targetX != -1)
	{
		cam.xTarget = targetX;
	}
	if(targetY != -1)
	{
		cam.yTarget = targetY;
	}
	
	audio.clip = clickSound;
	audio.Play();
}