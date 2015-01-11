private var ts : TimerScript;

function OnTriggerEnter()
{
	ts.canSub = true;
	Destroy(gameObject);
}