$(document).ready(function(){
    $("#output").hide();
    
    $("#searchButton").on("click", function(){
        let rollNo = $("#rollNo")

        console.log(rollNo)

        let data = JSON.parse(localStorage.getItem(rollNo[0].value));
        
        $("#firstName").text(data.firstName);
        $("#lastName").text(data.lastName);
        $("#age").text(data.age);
        $("#gender").text(data.gender);
        $("#rollno").text(data.rollNo);
        $("#hobbies").text(data.hobbies);

        $("#output").show();
    })
})
