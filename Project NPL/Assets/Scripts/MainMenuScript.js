var skin : GUISkin;

function OnGUI()
{
	GUI.skin = skin;
	if(GUI.Button(Rect(300,300,200,200),"Load TestLevel"))
	{
		Application.LoadLevel("asdf");
	}
}