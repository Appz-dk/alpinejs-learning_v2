document.addEventListener("alpine:init", () => {
  // Re-usable data for dropdown
  Alpine.data("dropdown", () => ({
    open: false,
    toggle() {
      this.open = !this.open
    }
  }))

  // Alpine store
  Alpine.store('currentUser', {
    username: "Appz",
    posts: ["Post 1", "Post 2"]
  })
})