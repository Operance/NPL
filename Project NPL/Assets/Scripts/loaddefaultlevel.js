
function OnMouseEnter()
 
{
 
	renderer.material.color = Color.red; //change the color of the text
 
}
 
function OnMouseExit()
 
{ 
	renderer.material.color = Color.white; //change the colorï»¿ of the text
 
}
 
function OnMouseUp()
{
	Application.LoadLevel("tt_defaultlevel");
}