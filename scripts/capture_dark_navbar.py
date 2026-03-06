from playwright.sync_api import sync_playwright
from PIL import Image

STORAGE_KEY = "convertwise-theme"
OUTPUT_DIR  = "/Users/nilanshgupta/convertwise-website/screenshots"


def capture_dark_navbar(url="http://localhost:5173"):
    print("Launching browser in dark mode (desktop 1920x1080) ...")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            device_scale_factor=2,
            color_scheme="dark",          # OS-level dark preference
        )

        # Pre-seed localStorage so the React theme provider picks dark on first render
        context.add_init_script(f"""
            window.localStorage.setItem('{STORAGE_KEY}', 'dark');
        """)

        page = context.new_page()
        page.goto(url, wait_until="networkidle")

        # Force dark class/attribute in case the app relies on class-based theming
        page.evaluate("""
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        """)

        page.wait_for_timeout(1000)   # Let CSS transitions finish

        # --- Full above-the-fold screenshot ---
        full_path = f"{OUTPUT_DIR}/dark_only_desktop_full.png"
        page.screenshot(path=full_path, full_page=False)
        print(f"  Full screenshot saved: {full_path}")

        # --- Cropped navbar ---
        nav = page.locator("nav").first
        box = nav.bounding_box()
        full_tmp = f"{OUTPUT_DIR}/dark_only_navbar_full_tmp.png"
        page.screenshot(path=full_tmp, full_page=False)

        if box:
            scale = 2          # matches device_scale_factor
            img    = Image.open(full_tmp)
            left   = int(box["x"]                     * scale)
            top    = int(box["y"]                     * scale)
            right  = int((box["x"] + box["width"])    * scale)
            bottom = int((box["y"] + box["height"] + 16) * scale)   # small padding
            cropped_path = f"{OUTPUT_DIR}/dark_only_navbar_cropped.png"
            img.crop((left, top, right, bottom)).save(cropped_path)
            print(f"  Navbar bounding box: {box}")
            print(f"  Cropped navbar saved: {cropped_path}")
        else:
            print("  WARNING: <nav> element not found – saving full screenshot instead.")
            import shutil
            shutil.copy(full_tmp, f"{OUTPUT_DIR}/dark_only_navbar_cropped.png")

        # Print the computed style of the nav background and logo for analysis
        nav_bg = page.evaluate("""
            (() => {
                const nav = document.querySelector('nav');
                if (!nav) return 'nav not found';
                const style = window.getComputedStyle(nav);
                return {
                    background: style.background,
                    backgroundColor: style.backgroundColor,
                    backdropFilter: style.backdropFilter,
                };
            })()
        """)
        print(f"  Nav computed style: {nav_bg}")

        # Try to get logo element info
        logo_info = page.evaluate("""
            (() => {
                // Try svg, img, or element with 'logo' in class/id
                const selectors = ['header img', 'nav img', '[class*="logo"]', '[id*="logo"]', 'nav svg'];
                for (const sel of selectors) {
                    const el = document.querySelector(sel);
                    if (el) {
                        const style = window.getComputedStyle(el);
                        const rect  = el.getBoundingClientRect();
                        return {
                            selector: sel,
                            tagName: el.tagName,
                            outerHTML: el.outerHTML.substring(0, 400),
                            color: style.color,
                            fill: style.fill,
                            filter: style.filter,
                            width: rect.width,
                            height: rect.height,
                        };
                    }
                }
                return 'no logo element found';
            })()
        """)
        print(f"  Logo element info: {logo_info}")

        browser.close()
    print("\nDone.")


if __name__ == "__main__":
    capture_dark_navbar()
