# Tests
A repo for testing new stuff.

## Downloader
```js
async function download() {
  let ix = 0;
  const a = document.createElement("a");
  const rRx = /=s\d+.*/;
  const fRx = /^https:\/\/yt3\.ggpht\.com\/[^\/]+=s.*/;
  const imgs = document.getElementById("contents")?.querySelectorAll("img");
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
    a.setAttribute("download", ix.toString());
    a.click();
    await new Promise((res) => setTimeout(() => res(), ++ix));
  }
}
```

## Pre Downloads
```js
let height = 0;
document.getElementById("player").remove();
document.getElementById("related").remove();
const iid = setInterval(() => {
  if (document.scrollingElement.scrollHeight > height) {
    height = document.scrollingElement.scrollHeight;
    window.scrollTo(0, document.scrollingElement.scrollHeight);
  } else clearInterval(iid);
}, 3e3);

const showReply = Array.from(
  document
    .getElementById("content")
    .querySelector("#page-manager")
    .querySelector("#columns")
    .querySelector("#below")
    .querySelector("#comments")
    .querySelector("#contents")
    .querySelectorAll("#replies")
).map((re) =>
  re.querySelector(
    "ytd-comment-thread-renderer.style-scope:nth-child(1) > div:nth-child(4) > ytd-comment-replies-renderer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ytd-button-renderer:nth-child(3) > yt-button-shape:nth-child(1) > button:nth-child(1)"
  )
);

const jid = setInterval(() => {
  if (showReply.length) {
    const btn = showReply.shift();
    btn.click();
  } else clearInterval(jid);
}, 1e3);

document
  .querySelector("#contents")
  .querySelectorAll("#button > ytd-button-renderer > yt-button-shape > button");
```
