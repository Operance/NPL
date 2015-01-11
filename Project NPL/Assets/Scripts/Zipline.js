#pragma strict

private var t : PlayerScript;

function OnTriggerStay(collider : Collider)
{
	if(collider.tag == "Zipline")
	{
  		var a1 : float = collider.transform.eulerAngles.y;
  		var a2 : float = transform.eulerAngles.y;
  		var d : float = Mathf.DeltaAngle(a1, a2);
  		
  		//Debug.Log(Mathf.DeltaAngle(a1, a2));
  		if(!t.zipline)
  		{
	  		if(d <= 90.0 && d > -90.0)
	  		{
	  			t.ziplineStart = collider.transform.GetChild(0).transform;
	  			t.ziplineEnd = collider.transform.GetChild(1).transform;
	  		}
	  		else
	  		{
	  			t.ziplineStart = collider.transform.GetChild(1).transform;
	  			t.ziplineEnd = collider.transform.GetChild(0).transform;
	  		}
  		}
  		
  		t.zipline = true;
  	}
}

function OnTriggerExit(collider : Collider)
{
	if(collider.tag == "Zipline")
	{
		t.zipline = false;
  		//t.zipVel = 0;
	}
}