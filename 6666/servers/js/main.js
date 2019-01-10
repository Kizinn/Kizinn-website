let outlinkDuplicate = (location) => {
  return window.location = location.replace(/-/g, '/')
}

const upvoteGuild = guild_id => {
  window.location.href = `/servers/${guild_id}/vote`
}


window.addEventListener('scroll', function() {
  document.querySelectorAll('.shapes-background').forEach((el) => {
    el.setAttribute("style", `transform:translateY(${window.pageYOffset/20}px) !important`)
  });
});