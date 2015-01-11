private var Target : AiRunner;

private var sw: GameObject;

function OnTriggerStay(collider : Collider)
{
	sw = collider.gameObject;
}
function OnTriggerExit(collider : Collider)
{
	if(collider.tag == "Level" && collider.gameObject == sw)
	{
		Target.autoJump = true;
		sw = null;
	}
}