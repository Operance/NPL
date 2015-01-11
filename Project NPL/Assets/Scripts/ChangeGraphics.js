var showMessage = false;
var label : GUISkin;
var w : int = 0;


function OnMouseUp()
{
	QualitySettings.DecreaseLevel();
	showMessage = true;
	for(var i : int = 0; i >= w; i++)
    {
    	w++;
        Debug.Log("Decreasing Graphics! " + i);
    }
	
}
function OnGUI()
{
	if(showMessage == true)
	{
		Debug.Log("SHOW!");
		GUI.skin = label;
		GUI.Label(Rect(Screen.width/2 - 50, Screen.height/2 +20,600,100),"Decreased!");
		mess();
		
	}
}
function mess()
{
	yield WaitForSeconds(w);
	showMessage = false;
}
