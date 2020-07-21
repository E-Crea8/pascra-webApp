<?php
$link = mysqli_connect("localhost", "root", "", "pascra_webapp");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}



						// Random characters
						$random_chars = "0";
						;$characters = array("B","C","D","F","G","H","J","K","L","M","N",
						"P","Q","R","S","T","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9");
						 
						// set the array
						$keys = array();
						 
						// set length
						$length = 3;
						 
						// loop to generate random keys and assign to an array
						while(count($keys) < $length) {
							$x = mt_rand(0, count($characters)-1);
							if(!in_array($x, $keys)) {
							   $keys[] = $x;
							}
						}
						 
						// extract each key from array
						foreach($keys as $key){
						   $random_chars .= $characters[$key];
						}
						///////////////End Random Character Generation					
						
						
						
						
							
              $service_name = $_POST['service_name'];
              $service_priority = $_POST['service_priority'];
              
              


           date_default_timezone_set("Africa/Lagos");

           $date = date('M d, Y h:ia', time());
           



						

          

						$sql="INSERT INTO service_tbl (service_name,service_priority,service_order_id,date_submitted)
						 VALUES ('$service_name', '$service_priority', '$random_chars', '$date')";
          
          if(mysqli_query($link,$sql)){
            echo "<script>alert('Continue Order Process'); window.location='service-bookings-2'</script>";
        }
        else {
            echo "Error Submitting Form";

        }



?>