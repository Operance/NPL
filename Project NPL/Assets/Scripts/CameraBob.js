var bobAmountY: float = 15;
var bobAmountX: float = 15;
var toggled = true;


private var offset = Vector3(0, 0, 0);
private var startOffset = Vector3(0, 0, 0);

private var bobRate = 12;
private var bob: float = 0;

private var ch: CharacterController;
private var ps: PlayerScript;
private var chMotor: CharacterMotor;
private var spr: SprintScript;

function Start () {
	//This way of getting a component from the parent's parent is literally the holocaust, which makes me Hitler :c
	ps = transform.parent.transform.parent.GetComponent(PlayerScript);
    ch = transform.parent.transform.parent.GetComponent(CharacterController);
    chMotor = transform.parent.transform.parent.GetComponent(CharacterMotor);
    startOffset = transform.localPosition;
    spr = transform.parent.transform.parent.GetComponent(SprintScript);
}

function Update () {
	if(ch.isGrounded)
	{
		var s: float = transform.InverseTransformDirection(ch.velocity).magnitude;
		
		if(s <= spr.walkSpeed + 1 && s >= spr.walkSpeed / 5)
		{
			bob += Time.deltaTime * (bobRate / 1.5);
		}
		if(s > spr.walkSpeed + 1)
		{
			bob += Time.deltaTime * bobRate;
		}
	}
	if(ps.wallRun && !ch.isGrounded)
	{
		bob += Time.deltaTime * bobRate / 1.5;
	}
	
	if(bob >= Mathf.PI * 2)
	{
		bob -= Mathf.PI * 2;
	}
	
	var x = Mathf.Sin(bob + (Mathf.PI / 2)) * bobAmountX;
	var y = Mathf.Abs(Mathf.Sin(bob)) * bobAmountY;
	
	offset = Vector3(-y - bobAmountY, x, 0);
	
	if(toggled)
	{
		transform.localEulerAngles = offset;
	}
}