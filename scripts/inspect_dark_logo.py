from playwright.sync_api import sync_playwright

JS_INSPECT_NAV = """
(() => {
    const nav = document.querySelector('nav');
    if (!nav) return [];
    const results = [];
    nav.querySelectorAll('img, svg, a').forEach(el => {
        const rect  = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        results.push({
            tag:        el.tagName,
            id:         el.id,
            className:  el.className.toString().substring(0, 200),
            src:        el.src || '',
            display:    style.display,
            visibility: style.visibility,
            opacity:    style.opacity,
            width:      rect.width,
            height:     rect.height,
            html:       el.outerHTML.substring(0, 350),
        });
    });
    return results;
})()
"""

JS_FORCE_DARK = """
document.documentElement.classList.remove('light');
document.documentElement.classList.add('dark');
document.documentElement.setAttribute('data-theme', 'dark');
"""

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            device_scale_factor=2,
            color_scheme="dark",
        )
        context.add_init_script("window.localStorage.setItem('convertwise-theme', 'dark');")

        page = context.new_page()
        page.goto("http://localhost:5173", wait_until="networkidle")
        page.evaluate(JS_FORCE_DARK)
        page.wait_for_timeout(1000)

        elements = page.evaluate(JS_INSPECT_NAV)
        print(f"Found {len(elements)} elements inside <nav>:")
        for el in elements:
            print("\n---")
            for k, v in el.items():
                print(f"  {k}: {v}")

        # Also grab the nav's full inner HTML to find the logo container
        nav_html = page.inner_html("nav")
        print("\n\n=== Full nav innerHTML (first 2000 chars) ===")
        print(nav_html[:2000])

        browser.close()

if __name__ == "__main__":
    main()
