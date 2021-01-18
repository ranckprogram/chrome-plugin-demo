console.log("我是找bug的chrome插件");

function IFindBuged() {
  console.log("我找到bug了");
}

this.IFindBuged = IFindBuged;
console.log(this);
console.log(window);

setTimeout(() => {
  console.log("bbbb==========");
  console.log(this);
}, 3000);

chrome.contextMenus.create({
  title: "测试右键菜单",
  onclick: function () {
    alert("您点击了右键菜单！");
  },
});
