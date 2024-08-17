function checkAge(){
  const ageField = document.getElementById('age');
  const ageText = ageField.value;
  const errorTag = document.getElementById('error')
  try {
    // console.log(bBaria)
    const age = parseInt(ageText)
    if (isNaN(age)) {
      // console.log('age is not found', age, ageText)
      throw "Please enter a number"
    }
    else if(age < 18) {
      throw "Age under 18 are not allowed"
    }
    else if(age > 30) {
      throw "30+ are not allowed"
    }
    errorTag.innerHTML = ''
  }
  catch (error) {
    console.log(error)
    errorTag.innerHTML = error
  }
  finally {
    console.log('all done inside try catch')
  }
  console.log(11111)
}

