function markCurrentPage(page_name) {
    let page_links = document.getElementsByClassName(page_name)
    for (let i = 0; i < page_links.length; i++) {
        page_links[i].classList.add("current_page")
    }
}

