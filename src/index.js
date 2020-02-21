var value = document.querySelector('.switch input');
var price = document.querySelectorAll('.price');
value.addEventListener('change', function () {
    if (value.checked) {
        for (var i = 0; i < price.length; i++) {
            check(price[i]);
        }
    }
    else if (value.checked === false) {
        for (var i = 0; i < price.length; i++) {
            check(price[i]);
        }
    }
});
function check(value) {
    if (value.innerHTML === '$199.99') {
        return value.innerHTML = '$19.99';
    }
    else if (value.innerHTML === '$249.99') {
        return value.innerHTML = '$24.99';
    }
    else if (value.innerHTML === '$399.99') {
        return value.innerHTML = '$39.99';
    }
    else if (value.innerHTML === '$19.99') {
        return value.innerHTML = '$199.99';
    }
    else if (value.innerHTML === '$24.99') {
        return value.innerHTML = '$249.99';
    }
    else if (value.innerHTML === '$39.99') {
        return value.innerHTML = '$399.99';
    }
}
