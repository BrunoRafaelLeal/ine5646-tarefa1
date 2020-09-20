const POSTS = [
    {title: "a", content: "aa"},
    {title: "b", content: "bb"},
    {title: "c", content: "cc"},
];
window.onload = contentArea;
function contentArea() {
    const contentDiv = document.querySelector("#content");
    for (post of POSTS) {
        const postDiv = document.createElement("DIV");
        const postStr = `${post.title}: ${post.content} <br><br><br><br><br><br><br>`;
        postDiv.className = "post";
        postDiv.innerHTML = postStr;
        contentDiv.appendChild(postDiv);  
    }
}