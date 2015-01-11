var isDefaultButton : GameObject;
function OnMouseEnter()
 
{
 
	renderer.material.color = Color.yellow; //change the color of the text
 
}
 
function OnMouseExit()
 
{ 
	renderer.material.color = Color.white; //change the colorï»¿ of the text
 
}
 
function OnMouseUp()
{
	if( isDefaultButton )
	{
		Application.LoadLevel("defaultleveltt");
	}
	else
	{
		Application.LoadLevel("Title");
	}
}