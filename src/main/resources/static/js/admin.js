/**
 * Sends DELETE request to CMS and removes page from list
 */
function deleteStaticPage(pageId)
{
    $.ajax({url:"/admin/pages/" + pageId, type:"DELETE", success: function(result)
    {
        $("#page-entry-" + pageId).remove();
    }});
}

function setStaticPagePublished(pageId, value)
{
    $.post("/admin/pages/" + pageId, {"published": value});
}