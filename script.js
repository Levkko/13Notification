function showNotification({ top = 0, right = 0, html }) {
  var notification = document.createElement("div");
  notification.className = "notification";
  document.body.append(notification);

  if (top) {
    notification.style.top = top + "px";
  };

  if (right) {
    notification.style.right = right + "px";
  };

  if (html) {
    notification.innerHTML = `<p>${html}</p>`;
  };

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

showNotification({top: 20, right: 25, html: "Notification!",});
