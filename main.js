$(document).ready(function(){
    
    $("#submitButton").on("click", function(){
        let firstName = $("#firstName")
        let lastName = $("#lastName")
        let age = $("#age")
        let rollNo = $("#rollNo")
        let gender = $("#gender")
        let hobbies = $("#hobbies")

        console.log(rollNo)

        let data = {
            "firstName": firstName[0].value,
            "lastName": lastName[0].value,
            "age": age[0].value,
            "rollNo": rollNo[0].value,
            "gender": gender[0].value,
            "hobbies": hobbies[0].value
        }

        localStorage.setItem(rollNo[0].value, JSON.stringify(data));

        alert("Data Saved ! Visit Search page to see data using Roll No.");

        $("#registrationForm").trigger("reset");
    })
})
