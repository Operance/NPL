
function OnMouseEnter()
 
{
 	var menusound : AudioClip;
	renderer.material.color = Color.red; //change the color of the text
	audio.Play();
 
}
 
function OnMouseExit()
 
{ 
	renderer.material.color = Color.white; //change the colorï»¿ of the text
 
}
 
function OnMouseUp()
{
	Application.LoadLevel("Title");
}