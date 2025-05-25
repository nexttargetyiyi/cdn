document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("cdn-status");
  const nodes = [
    { name: "东京", delay: "12ms" },
    { name: "法兰克福", delay: "32ms" },
    { name: "新加坡", delay: "18ms" }
  ];
  section.innerHTML = nodes.map(n =>
    `<div><strong>${n.name}</strong> 节点响应时间: ${n.delay}</div>`
  ).join("");
});
