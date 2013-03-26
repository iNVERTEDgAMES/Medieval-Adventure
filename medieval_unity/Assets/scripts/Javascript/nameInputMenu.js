var textFieldString = "";
var namePref : String;

function OnGUI () {
	GUI.Label (Rect (25, 25, 200, 100), "Welcome to Medieval Adventure!");
	GUI.Label (Rect (25, 50, 200, 100), "Enter your name in the field below");
	textFieldString = GUI.TextField (Rect (25, 75, 200, 25), textFieldString);
	var namePref = PlayerPrefs.GetString("Name");
	GUI.Label (Rect (25, 100, 200, 100), namePref);
}


function Update () {
	if(Input.GetButtonDown("Fire1")) {
		PlayerPrefs.SetString("Name", textFieldString);
	}
}