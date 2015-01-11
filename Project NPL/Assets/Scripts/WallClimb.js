private var t : PlayerScript;
var Player : Transform;

function Start()
{
	t = Player.GetComponent(PlayerScript);
}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player")
	{
  		t.wallClimb = true;
  		Debug.Log("SET TO TRUE");
  	}
}
function OnTriggerExit()
{
	t.wallClimb = false;
}