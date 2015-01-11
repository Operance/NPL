var text : TextMesh;
var Player : Transform;

function Update()
{
	if(Input.GetKeyDown(KeyCode.F))
	{
		Destroy (text);
		Application.LoadLevel("Title");
		
	}

}
