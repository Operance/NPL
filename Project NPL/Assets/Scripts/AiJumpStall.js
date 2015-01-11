var Target : AiRunner;

function OnTriggerStay(collider : Collider)
{
	AiRunner.jumpStall = true;
}
function OnTriggerExit(collider : Collider)
{
	AiRunner.jumpStall = false;
}