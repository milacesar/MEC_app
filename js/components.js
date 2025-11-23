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

async function loadMathJax() {
    return new Promise((resolve, reject) => {
        if (window.MathJax) {
            // MathJax is already loaded
            resolve();
        } else {
            // Create the script element
            const script = document.createElement("script");
            script.id = "MathJax-script";
            script.src = "https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js";
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load MathJax"));
            document.head.appendChild(script);
        }
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    await loadHeadTemplate();
    await loadTemplate("header-template", "header");
    await loadTemplate("footer-template", "footer");

    // Wait for MathJax to load before typesetting
    await loadMathJax();
    await MathJax.typesetPromise();
});

