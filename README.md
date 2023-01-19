# Tests
A repo for testing new stuff.

## Downloader
```js
let height, iid, showReply, moreReply;

height = 0;
document.getElementById("player").remove();
document.getElementById("related").remove();

iid = setInterval(() => {
  console.log(document.scrollingElement.scrollHeight, height);
  if (document.scrollingElement.scrollHeight > height) {
    height = document.scrollingElement.scrollHeight;
    window.scrollTo(0, document.scrollingElement.scrollHeight);
  } else clearInterval(iid);
}, 2e3);

showReply = Array.from(
  document
    .getElementById("content")
    .querySelector("#page-manager")
    .querySelector("#columns")
    .querySelector("#below")
    .querySelector("#comments")
    .querySelector("#contents")
    .querySelectorAll("#replies:not([hidden])")
).map((re) => re.querySelector("button"));

iid = setInterval(() => {
  console.log(showReply.length);
  if (showReply.length) {
    const btn = showReply.pop();
    btn.focus();
    btn.click();
  } else clearInterval(iid);
}, 1e3);

window.scrollTo(0, document.scrollingElement.scrollHeight);

moreReply = Array.from(
  document
    .getElementById("content")
    .querySelector("#page-manager")
    .querySelector("#columns")
    .querySelector("#below")
    .querySelector("#comments")
    .querySelector("#contents")
    .querySelectorAll("img")
)
  .map((re) =>
    re
      .querySelector("#expander-contents")
      .querySelector("#contents")
      .querySelector("#button")
      ?.querySelector("button")
  )
  .filter(Boolean);

iid = setInterval(() => {
  console.log(moreReply.length);
  if (moreReply.length) {
    const btn = moreReply.pop();
    btn.focus();
    btn.click();
  } else clearInterval(iid);
}, 1e3);

window.scrollTo(0, 0);

iid = setInterval(() => {
  console.log(
    document.scrollingElement.scrollTop + window.innerHeight,
    document.scrollingElement.scrollHeight
  );
  if (
    document.scrollingElement.scrollHeight >
    document.scrollingElement.scrollTop + window.innerHeight
  ) {
    window.scrollBy({ top: 1000, behavior: "smooth" });
  } else clearInterval(iid);
}, 1e3);

async function download() {
  let ix = 0;
  const a = document.createElement("a");
  const rRx = /=s\d+.*/;
  const fRx = /^https:\/\/yt3\.ggpht\.com\/[^\/]+=s.*/;
  const imgs = document
    .getElementById("content")
    .querySelector("#page-manager")
    .querySelector("#columns")
    .querySelector("#below")
    .querySelector("#comments")
    .querySelector("#contents")
    .querySelectorAll("#img");
  console.log(`There are ${imgs?.length} imgs`);
  const filt = new Set(
    Array.from(imgs)
      ?.filter((img) => fRx.test(img.src))
      .map((img) => img.src.replace(rRx, "=s256"))
  );
  console.log(`There are ${filt.size} urls`);
  for (const url of filt) {
    URL.revokeObjectURL(a.href);
    const res = await fetch(url);
    const file = await res.blob();
    a.href = URL.createObjectURL(file);
    a.setAttribute("download", (ix++).toString());
    a.click();
    await new Promise((res) => setTimeout(() => res(), 100));
  }
}
```
### Now implement this as an extention for firefox
