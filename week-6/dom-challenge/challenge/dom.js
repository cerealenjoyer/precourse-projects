/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  document.querySelectorAll(".font-serif")[1].classList.toggle("highlight")
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  const list = `<ul> ${array.map((a) => `<li>${a}</li>`).join(" ")} </ul>`
  const element = document.createElement("template")
  element.innerHTML = list
  return element.content.firstChild
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  console.log(textarea.value)
  if (textarea.value.length > 180) {
    document.getElementById("tweet").setAttribute("aria-invalid", true)
  } else {
    document.getElementById("tweet").setAttribute("aria-invalid", false)
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  const tweet = document.getElementById("tweet")
  tweet.addEventListener("input", () => validateTweet(tweet))
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  document.querySelectorAll(".toggle-button").forEach((button) =>
    button.addEventListener("click", () => {
      button.nextElementSibling.hidden = !button.nextElementSibling.hidden
    })
  )
}
