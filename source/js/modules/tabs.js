export default function renderTabs(options) {
  const tabs = document.querySelector(`.${options.container}`);
  const tabsBtn = document.querySelectorAll(`.${options.button}`);
  const tabsContent = document.querySelectorAll(`.${options.content}`);

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains(`${options.button}`)) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove(`${options.button}--active`);
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add(`${options.button}--active`);
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove(`${options.content}--show`);
    });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add(`${options.content}--show`);
  };
}
