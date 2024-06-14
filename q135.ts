// Explain how you can format a JSON string with proper indentation for readability.

// Reusing the person object from Question 133
const person = {
    name: "Huma",
    age: 30,
    city: "Islamabad",
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString = JSON.stringify(person, null, 2);     // The '2' specifies the number of spaces to use as white space
  console.log(jsonString);
  
  // Shows how adding indentation to the JSON string makes it easier to read.