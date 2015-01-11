#pragma strict
private var controller : CharacterMotor;
private var ps : PlayerScript;
var woosh1 : AudioSource;
var woosh2 : AudioSource;

function Start () {
  controller = transform.parent.transform.parent.transform.parent.transform.parent.GetComponent(CharacterMotor);
  ps = transform.parent.transform.parent.transform.parent.transform.parent.GetComponent(PlayerScript);
}

function Update () {
    var vel = controller.movement.velocity.magnitude + ps.zipVel;
    
    woosh1.volume = (vel - 13) / 6;
    woosh1.pitch = 0.95;
    woosh2.volume = Mathf.Min((vel - 7) / 48, 0.25);
    //audios[1].audio.volume = Mathf.Min((vel - 7) / 48, 0.25);
}