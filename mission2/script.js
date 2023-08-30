/*2 elemen daftar yang diambil dari id elemen html*/
const friendList = document.getElementById("friend-list");
const followingList = document.getElementById("following-list");

friendList.addEventListener("click", event => { /*saat diklik addEventListener akan dieksekusi*/
    const button = event.target;
    if (button.classList.contains("follow-button")) { 
        moveToList(button, followingList, "Unfollow");
        /*jika tombol memiliki kelas "follow-button" maka fungsi moveToList dilakukan*/
    }
});

followingList.addEventListener("click", event => {
    const button = event.target;
    if (button.classList.contains("unfollow-button")) {
        moveToList(button, friendList, "Follow");
    }
});

function moveToList(button, targetList, newButtonText) {
    /*memindahkan elemen dari satu daftar ke daftar lain, mengubah teks tombol, dan mengganti kelas tombol*/
    const listItem = button.parentElement;
    const username = listItem.firstChild.textContent;

    targetList.appendChild(listItem);
    button.textContent = newButtonText;
    button.classList.toggle("follow-button");
    button.classList.toggle("unfollow-button");
}
