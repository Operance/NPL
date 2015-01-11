private var t : AIScript;

function Start()
{
	t = transform.parent.GetComponent(AIScript);
}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Level")
	{
  		t.wallRun = true;
  	}
}
function OnTriggerExit()
{
	t.wallRun = false;
}