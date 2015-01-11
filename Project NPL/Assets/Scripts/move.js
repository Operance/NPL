 var amplitude: float = 100; 
 var speed: float = 30; 
 var direction: Vector3 = Vector3.right; 
 private var p0: Vector3;
 
 function Start()
 {
   p0 = transform.position;
   while (true)
   {
     
     var dir = transform.TransformDirection(direction);
     
     transform.position = p0+ amplitude *dir  *Mathf.Sin(10 * speed * Time.time * 1.5);
     
   }
 }