var isLeft = false;
var isRight = false;

private var t : PlayerScript;
private var ch: CharacterController;

function Start()
{
	ch = transform.parent.GetComponent(CharacterController);
	t = transform.parent.GetComponent(PlayerScript);
}

function OnTriggerStay(collider : Collider)
{
	if(ch.isGrounded)
	{
		if(collider.tag == "AI")
		{
			if(isLeft)
			{
	  			if(Input.GetMouseButton(0))
	  			{
	  				Debug.Log("SUCCESS LEFT");
	  				collider.GetComponent(Impact).AddImpact(-transform.right + Vector3(0, -0.1, 0), 50);
	  			}
	  		}
	  		if(isRight)
	  		{
	  			if(Input.GetMouseButton(1))
	  			{
	  				Debug.Log("SUCCESS RIGHT");
	  				collider.GetComponent(Impact).AddImpact(transform.right + Vector3(0, -0.1, 0), 50);
	  			}
	  		}
	  	}
  	}
}