
$(document).ready(function(){

    $(".saveBtn").on("click", function(){

        console.log(`It saved`);


        let timeID =$(this).parent().attr("id")
        let value = $(this).siblings(".description").val();

        console.log(timeID);
        console.log(value);

        localStorage.setItem(timeID, value);
       
    })
    


    function hourUpdate(){
     let currentHour = moment().hours();

     for(let i = 0; i < $(".time-block").length; i++){
        let hour =parseInt($(".time-block")[i].getAttribute("id").split("-")[1])
        if(hour < currentHour) {
         $(".time-block")[i].classList.add("past")  
        } else if(hour === currentHour){
        $(".time-block")[i].classList.add("past")  
        $(".time-block")[i].classList.remove("present")  

     } else {
        $(".time-block")[i].classList.remove("past")  
        $(".time-block")[i].classList.remove("present") 
        $(".time-block")[i].classList.add("future") 


     }
     console.log(currentHour);

    }

    }

   hourUpdate;
   let interval = setInterval(hourUpdate, 15000);

   $("#hour-8.00 .description").val(localStorage.getItem("hour-8.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-9.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-10.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-11.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-12.00")) 
   $("#hour-8.00 .description").val(localStorage.getItem("hour-13.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-14.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-15.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-16.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-17.00"))
   $("#hour-8.00 .description").val(localStorage.getItem("hour-18.00"))
  

   $("#currentDay").text(moment().format("dddd, MMMM, Do"))

})