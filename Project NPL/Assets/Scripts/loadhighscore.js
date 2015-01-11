var hs : TextMesh;
var textTime : String;
var highscore : String;
function Start ()
{
	
	time = PlayerPrefs.GetString("highscore");
	highscore = time;
    hs.text = highscore;
	
}
