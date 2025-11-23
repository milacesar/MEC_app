let componentsCache = null;

async function loadComponentsFile() {
    if (!componentsCache) {
        const response = await fetch("./components.html");
        const text = await response.text();
        const container = document.createElement("div");
        container.innerHTML = text;
        componentsCache = container;
    }
    return componentsCache;
}

async function loadTemplate(templateId, targetId) {
    const container = await loadComponentsFile();
    const template = container.querySelector(`#${templateId}`);
    const target = document.getElementById(targetId);

    if (template && target) {
        target.innerHTML = template.innerHTML;
    }
}

async function loadHeadTemplate() {
    const container = await loadComponentsFile();
    const template = container.querySelector("#shared-head");

    if (template) {
        document.head.insertAdjacentHTML("beforeend", template.innerHTML);
    }
}

// Auto-run
document.addEventListener("DOMContentLoaded", () => {
    loadHeadTemplate();
    loadTemplate("header-template", "header");
    loadTemplate("footer-template", "footer");
});

