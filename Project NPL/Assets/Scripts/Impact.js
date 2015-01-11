var mass = 3.0; // defines the character mass
var impact = Vector3.zero;

private var character: CharacterController;

function Start()
{
	character = GetComponent(CharacterController);
}

// call this function to add an impact force:
function AddImpact(dir: Vector3, force: float)
{
  dir.Normalize();
  if (dir.y != 0) dir.y = -dir.y;		// reflect down force on the ground
  impact += dir.normalized * force / mass;
}

function Update()
{
	if (impact.magnitude > 0.2) character.Move(impact * Time.deltaTime);		// consumes the impact energy each cycle:
	impact = Vector3.Lerp(impact, Vector3.zero, 5*Time.deltaTime);
}