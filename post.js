async function userPosts() {
  const geting = await fetch("https://dummyjson.com/posts?limit=100");
  const gettingJ = await geting.json();
  localStorage.setItem("posts", JSON.stringify(gettingJ.posts));
  // console.log(gettingJ.posts);
}
userPosts();

const dataShow = document.getElementById("postId");
const getPost = JSON.parse(localStorage.getItem("posts"));

const showPost = getPost.map((pos) => {
  // console.log(pos);
  return ` <div class="card">
  <div class="card-header" id="titleHolder">${pos.title}</div>
  <div class="card-body">
    <h5 class="card-title" id="bodyHolder" >${pos.body}</h5>
    <p class="card-text"></p>
  </div>
</div>`;
});
dataShow.innerHTML = showPost;

async function userComments() {
  const com = await fetch("https://dummyjson.com/comments");
  const ucom = await com.json();
  localStorage.setItem("comments", JSON.stringify(ucom.comments));
  // console.log(ucom.comments);
}
userComments();
