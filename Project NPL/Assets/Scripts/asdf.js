static var stop = false;
function Update()
{
	if(stop == true)
	{
		GetComponent(MouseLook).enabled = false;
	}
}