var showMessage : boolean;
var Target : TimerScript;
 
function OnGUI()
{
   if(showMessage)
   {
 		//Debug.Log("YEP");
    
   }
}
 
 

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player")
	{
   		showMessage = true;
   		TimerScript.countTime = false;
   		TimerScript.showfinalTime = true;
   	}
}

function OnTriggerExit()
{
   showMessage = false;
   }