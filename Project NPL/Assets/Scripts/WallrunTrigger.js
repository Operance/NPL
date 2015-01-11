private var t : PlayerScript;
var left = false;

private var wall = false;

function Start()
{
	t = transform.parent.GetComponent(PlayerScript);
}

function Update () {
	if(wall)
	{
		t.wallRun = true;
  		if(left)
  			t.wallRunLeft = true;
  		else
  			t.wallRunRight = true;
	}
	else
	{
		//t.wallRun = false;
		if(left)
			t.wallRunLeft = false;
		else
			t.wallRunRight = false;
	}
	
	//wall = false;
}

function OnTriggerStay(collider : Collider)
{
	if(collider.tag == "Level")
	{
		wall = true;
		//Debug.Log("Wall Start");
  		//Debug.Log("SET TO TRUE");
  	}
}

function OnTriggerExit(collider : Collider)
{
	if(collider.tag == "Level")
	{
		wall = false;
		//Debug.Log("Wall End");
	}
}
