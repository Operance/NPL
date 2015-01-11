var walkSounds:AudioClip[];
private var minInterval = 0.07; // min interval between steps
var maxVelocity = 8; // max character speed
private var bias = 15; // the greater the bias, the lesser the step delay variation

function Start () { 
  var controller : CharacterController = GetComponent(CharacterController);
  while (true){
    var vel = controller.velocity.magnitude;
    if (controller.isGrounded && vel > 0.2){
        audio.clip = walkSounds[0/*Random.Range(0, walkSounds.length)*/];
        audio.pitch = Random.Range(0.9, 1.1);
        audio.Play();
        var interval = minInterval*(maxVelocity+bias)/(vel+bias)*4.5;
        yield WaitForSeconds(interval);
    }
    else
    {
        yield;
    }
  }
}