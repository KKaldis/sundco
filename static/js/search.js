const searchText = (click) => {
  const search = document.getElementById("search");
  search.focus();
  const textInput = document.getElementById("fakeInput");
  const placeholder = document.getElementById("placeholder");
  const placeholderText = document.getElementById("placeholder-text");

  textInput.innerHTML = search.value;

  if (search.value.length === 0 && click) {
    placeholderText.classList.add("guide-text");
    placeholderText.innerHTML = "(press Q on keyboard)";
    placeholderText.classList.remove("hide");
    placeholder.classList.remove("ph-underline");
  } else if (search.value.length === 0 && !click) {
    placeholderText.classList.remove("guide-text");
    placeholderText.innerHTML = "Start Typing";
    placeholderText.classList.remove("hide");
    placeholder.classList.remove("ph-underline");
  } else {
    placeholderText.innerHTML = null;
    placeholder.classList.add("ph-underline");
    placeholderText.classList.add("hide");
  }
};

const toggleSearch = (show) => {
  const modal = document.getElementById('modal');
  const body = document.getElementById('body')

  if (show) {
    modal.classList.add('modal-show')
    body.classList.add('overflow-hide')

  }
  else {
    modal.classList.remove('modal-show');
    body.classList.remove('overflow-hide')
  }
}