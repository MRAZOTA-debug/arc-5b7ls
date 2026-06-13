// Reply Rename Plugin для Exteragram
// Заменяет текст "Ответ" на "Цитировать"

module.exports = {
  onLoad() {
    console.log('Reply Rename плагин загружен');
    this.replaceReplyText();
    this.observeChanges();
  },

  replaceReplyText() {
    const elements = document.querySelectorAll('[data-text="Reply"], .reply-button, .context-menu-item');
    elements.forEach(el => {
      if (el.textContent.includes('Ответ') || el.textContent.includes('Reply')) {
        el.textContent = el.textContent.replace(/Ответ|Reply/gi, 'Цитировать');
      }
    });
  },

  observeChanges() {
    const observer = new MutationObserver(() => {
      this.replaceReplyText();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  },

  onUnload() {
    console.log('Reply Rename плагин выгружен');
  }
};
