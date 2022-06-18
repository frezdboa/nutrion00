<? php
	$CN = mysqli_connect("localhost", "root", "");
$DB = mysqli_select_db($CN, "projet");

$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);


$accord_stat_age = $DecodedData['accord_stat_age'];
$pseudo = $DecodedData['pseudo'];
$password = $DecodedData['password'];

$IQ = "insert into utilisateur(accord_stat_age,pseudo,password) values($accord_stat_age,'$pseudo','$password')";

$R = mysqli_query($CN, $IQ);

if ($R) {
    $Message = "L'utilisateur a bien été enregistré";
}
else {
    $Message = "Server Error";
}

$Response[] = array("Message"=> $Message);
	
	echo json_encode($Response);
	

?>