function setHeading(title, desc) {
    $('#info_title_container').html(title);
    $('#info_desc_container').html(desc);
}

function setBadge(badge) {
    $('#logo').empty();
    $('#logo').prepend(`<img src="${badge}" alt="Badge" />`);
}

function setContentTitle(text) {
    $('#content_title').html(text);
}

function setContentBody(src) {
    $('#content_items_container').load(src);
}

function clearBody() {
    $('#content_items_container').empty();
}

async function appendToBody(src, ...params) {
    let data = await $.get(src);
    for (let param of params) {
        data = data.replaceAll(param.tag, param.value);
    }
    data = data.replaceAll('\{(.*?)\}', '');

    $('#content_items_container').append(data);
    return $('#content_items_container')[0].lastChild;
}

function setQuickLinks(name, links) {
    $('.quick_links_container').empty();
    $('.quick_links_container').append(`<div class="quick_links_item"><b>${name}</b></div>`);
    console.log(links);
    for(const link of links) {
        if(typeof link === 'string') {
            $('.quick_links_container').append(`<div class="quick_links_item"><a>${link}</a></div>`);
        } else if(typeof link === 'object' && link.name !== undefined) {
            $('.quick_links_container').append(`<div class="quick_links_item"><a href="${link.source}" target="_blank">${link.name} (${link.languages.join(', ')})</a></div>`);
        }
    }
}

let curOnClick;
function setButton(text, onClick) {
    $('#generic_btn').html(text);
    if(curOnClick) {
        $('#generic_btn')[0].removeEventListener('click', curOnClick);
    }
    curOnClick = onClick;
    $('#generic_btn')[0].addEventListener('click', onClick);
}

function setButtonDisabled(disabled) {
    disabled ? $('#generic_btn')[0].parentNode.classList.add('gdisabled') : $('#generic_btn')[0].parentNode.classList.remove('gdisabled');
}

function setButtonVisible(visible) {
    visible ? $('#generic_btn')[0].parentNode.classList.remove('invisible') : $('#generic_btn')[0].parentNode.classList.add('invisible');
}

let curOnReturn;
function setReturn(text, onReturn) {
    $('#return_btn').html(text);
    if(curOnClick) {
        $('#return_btn')[0].removeEventListener('click', curOnReturn);
    }
    curOnReturn = onReturn;
    $('#return_btn')[0].addEventListener('click', onReturn);
}

function setReturnDisabled(disabled) {
    disabled ? $('#return_btn')[0].parentNode.classList.add('gdisabled') : $('#return_btn')[0].parentNode.classList.remove('gdisabled');
}

function setReturnVisible(visible) {
    visible ? $('#return_btn')[0].parentNode.classList.remove('invisible') : $('#return_btn')[0].parentNode.classList.add('invisible');
}



function getCookie(name) {
    let cookies = document.cookie.split(";")
    for(let cookie of cookies) {
        let cName = cookie.trim().split('=')[0];
        let cValue = cookie.trim().split('=')[1];
        if(name === cName) return cValue;
    }
}
