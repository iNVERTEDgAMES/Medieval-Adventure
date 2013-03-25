var textFieldString = "";
var namePref : String = PlayerPrefs.GetString("Name");

function OnGUI () {
	GUI.Label (Rect (25, 25, 200, 100), "Welcome to Medieval Adventure!");
	GUI.Label (Rect (25, 50, 200, 100), "Enter your name in the field below");
	textFieldString = GUI.TextField (Rect (25, 75, 200, 25), textFieldString);
	GUI.Label (Rect (25, 100, 200, 100), namePref);
	onFinishedEditing();
}


function onFinishedEditing () {
	print(textFieldString);
	OnGUI();
}

