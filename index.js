var siteNameInput = document.getElementById("SiteName");
var bookMarkNameInput = document.getElementById("bookmarkname");
var container;
var checker1 = 0;
var checker2 = 0;

if (localStorage.getItem("container")) {
    container = JSON.parse(localStorage.getItem("container"))
    displaysite();
}
else {
    container = [];
}


function addsite() {
    if (checker1 == 0 || checker2 == 0) {
        show();
    }
    else {
        var site = {
            name: siteNameInput.value,
            bookmark: bookMarkNameInput.value
        }
        container.push(site)
        localStorage.setItem("container", JSON.stringify(container));
        displaysite();
        clearform();
        checker1=0;
        checker2=0;
        SiteName.classList.remove("is-valid");
        bookmarkname.classList.remove("is-valid");
    }
}


function displaysite() {
    var collector = "";
    for (var i = 0; i < container.length; i++) {

        collector +=
            `
    <tr>
                  <td>${i}</td>
                  <td>${container[i].name}</td>              
                  <td>
                  <a href="https://${container[i].bookmark}/" target="_blank">
            <button class="btn btn-visit" data-index="0">
              <i class="fa-solid fa-eye pe-2"></i>Visit
            </button>
            </a>
                  </td>
                  <td>
                  <button class="btn btn-delete pe-2" data-index="0" onclick="deletesite(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
          
                  </td>
              </tr>
    `
    }
    tableContent.innerHTML = collector;
}
function deletesite(index) {
    container.splice(index, 1)
    localStorage.setItem("container", JSON.stringify(container))
    displaysite()
}


function clearform() {
    siteNameInput.value = "";
    bookMarkNameInput.value = "";
}

function hide() {
    error.classList.add("d-none")
}
function show() {
    error.classList.remove("d-none")
}

function validate1(item) {
    var regex1 = /^[\w]{3,}/;

    if (regex1.test(item.value)) {
        item.classList.remove("is-invalid")
        item.classList.add("is-valid")
        checker1 = 1;
    }
    else {
        item.classList.remove("is-valid")
        item.classList.add("is-invalid")
        checker1 = 0;
    }
}

function validate2(item) {
    var regex2 = /^[\w]{1,}[\.]{1}[\w]{2,}/;


    if (regex2.test(item.value)) {
        item.classList.remove("is-invalid")
        item.classList.add("is-valid")
        checker2 = 1;

    }
    else {
        item.classList.remove("is-valid")
        item.classList.add("is-invalid")
        checker2 = 0;
    }
}