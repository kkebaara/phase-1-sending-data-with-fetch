// Add your code here

// submitData()
// 1) makes a POST request to /users with a name and email
// 2) handles the POST request response, retrieves the new id value and appends it to the DOM
// 3) handles a failed POST request using catch, appends the error message to the DOM

const usersUrl = "http://localhost:3000/users"

const data = {
  name: "Steve",
  email: "steve@steve.com",
};

function submitData(){
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(usersUrl, configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object)
    })
    .catch(function (error) {
      alert('Unauthorized Access');
      console.log(error.message);
    });
}
submitData()
