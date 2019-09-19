function handleSubmit() {
    $('#js-shopping-list-form').submit( function(event) {
        event.preventDefault();
        const itemData = $('#shopping-list-entry').val();
        $('ul.shopping-list').append("<li>\n" +
            "        <span class=\"shopping-item\">" + itemData + "</span>\n" +
            "        <div class=\"shopping-item-controls\">\n" +
            "          <button class=\"shopping-item-toggle\">\n" +
            "            <span class=\"button-label\">check</span>\n" +
            "          </button>\n" +
            "          <button class=\"shopping-item-delete\">\n" +
            "            <span class=\"button-label\">delete</span>\n" +
            "          </button>\n" +
            "        </div>\n" +
            "      </li>")
    });
}
function handleItemCheckClicked(){
    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        const item = event.target.closest('li').getElementsByClassName('shopping-item').item(0);
        item.classList.toggle('shopping-item__checked');
    });
}
function handleItemDeleteClicked(){
    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        event.target.closest('li').remove();
    });
}

handleHandles = () => {
    $(handleSubmit);
    $(handleItemCheckClicked)
    $(handleItemDeleteClicked)
}

$(handleHandles);
