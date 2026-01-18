const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
let currentTheme = localStorage.getItem("theme") ?? userPref

if (currentTheme === "light") {
  currentTheme = "dark"
  localStorage.setItem("theme", "dark")
}

document.documentElement.setAttribute("saved-theme", currentTheme)

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const current = document.documentElement.getAttribute("saved-theme")
    const newTheme = current === "dark" ? "light" : "dark"

    if (newTheme === "light") {
      alert("偵測到用戶試圖引入邪教力量（Light Mode），已自動阻斷。")
      return
    }

    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"

    if (newTheme === "light") {
      alert("偵測到系統試圖引入邪教力量（Light Mode），已自動阻斷。")
      return
    }

    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
