function setHeading(badge, title, desc) {
    $('#logo').empty();
    $('#logo').prepend(`<img src="${badge}" />`);

    $('#info_title_container').html(title);
    $('#info_desc_container').html(desc);
}

function setContentTitle(text) {
    $('#content_title').html(text);
}

function setContentBody(src) {
    $('#content_items_container').load(src);
}

function setQuickLinks(name, links) {
    $('.quick_links_container').empty();
    $('.quick_links_container').append(`<div class="quick_links_item"><b>${name}</b></div>`);
    console.log(links);
    for(const link of links) {
        if(typeof link === 'string') {
            $('.quick_links_container').append(`<div class="quick_links_item"><a>${link}</a></div>`);
        } else if(typeof link === 'object' && link.name !== undefined) {
            $('.quick_links_container').append(`<div class="quick_links_item"><a href="${link.source}">${link.name} (${link.languages.join(', ')})</a></div>`);
        }
    }
}
