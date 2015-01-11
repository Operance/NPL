function Update()
{
	if(Input.GetKeyDown(KeyCode.F12))
	{

		var utcTime = System.DateTime.Now.TimeOfDay.ToString();
        Debug.Log(utcTime);
        var filename = "Image_" + utcTime + ".png";
        Application.CaptureScreenshot(filename);
	}
}