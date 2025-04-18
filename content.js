(async () => {
    // Fetch static data
    const response = await fetch(chrome.runtime.getURL('data.json'));
    const data = await response.json();

    // Create widget container
    const widget = document.createElement('div');
    widget.id = 'linkedin-widget';

    // Populate widget content
    widget.innerHTML = `
      <h2>${data.companyName}</h2>
      <div>Match Score: ${data.matchScore}%</div>
      <div class="progress-bar">
        <div class="progress" style="width: ${data.matchScore}%;"></div>
      </div>
      <div class="status ${data.accountStatus.toLowerCase().replace(' ', '-')}">
        ${data.accountStatus}
      </div>
      <button class="toggle-button">Hide Widget</button>
    `;

    // Append widget to body
    document.body.appendChild(widget);

    // Handle toggle visibility
    const toggleButton = widget.querySelector('.toggle-button');
    toggleButton.addEventListener('click', () => {
        const isVisible = widget.style.display !== 'none';
        widget.style.display = isVisible ? 'none' : 'block';
        toggleButton.textContent = isVisible ? 'Show Widget' : 'Hide Widget';
        chrome.storage.local.set({ widgetVisible: !isVisible });
    });

    // Initialize visibility from storage
    chrome.storage.local.get('widgetVisible', (result) => {
        if (result.widgetVisible === false) {
            widget.style.display = 'none';
            toggleButton.textContent = 'Show Widget';
        }
    });
})();
