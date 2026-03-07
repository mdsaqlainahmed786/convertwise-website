from playwright.sync_api import sync_playwright
from PIL import Image

STORAGE_KEY = "convertwise-theme"

def capture_navbar_crop(page, output_path, scale=2):
    """Crop the page screenshot down to just the navbar row."""
    nav = page.locator('nav').first
    box = nav.bounding_box()
    tmp_path = output_path.replace('.png', '_full_tmp.png')
    page.screenshot(path=tmp_path, full_page=False)
    if box:
        img = Image.open(tmp_path)
        left   = int(box['x'] * scale)
        top    = int(box['y'] * scale)
        right  = int((box['x'] + box['width']) * scale)
        bottom = int((box['y'] + box['height'] + 10) * scale)
        img.crop((left, top, right, bottom)).save(output_path)
        print(f"  Navbar box: {box}  ->  saved {output_path}")
    else:
        import shutil; shutil.copy(tmp_path, output_path)
        print(f"  Nav not found, full screenshot saved: {output_path}")


def capture(url, prefix, viewport_width=1440, viewport_height=900, dark_mode=False):
    label = "dark" if dark_mode else "light"
    print(f"\nCapturing {label} mode ({viewport_width}x{viewport_height}) ...")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={'width': viewport_width, 'height': viewport_height},
            device_scale_factor=2,
        )

        # Inject theme into localStorage BEFORE the page loads
        context.add_init_script(f"""
            window.localStorage.setItem('{STORAGE_KEY}', '{'dark' if dark_mode else 'light'}');
        """)

        page = context.new_page()
        page.goto(url, wait_until='networkidle')

        # Also force the class directly in case React hasn't run yet
        if dark_mode:
            page.evaluate("""
                document.documentElement.classList.remove('light');
                document.documentElement.classList.add('dark');
                document.documentElement.setAttribute('data-theme', 'dark');
            """)
        else:
            page.evaluate("""
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                document.documentElement.setAttribute('data-theme', 'light');
            """)

        page.wait_for_timeout(800)  # Let transitions settle

        # Full above-the-fold screenshot
        full_path = f"/Users/nilanshgupta/convertwise-website/screenshots/{prefix}_{label}_desktop.png"
        page.screenshot(path=full_path, full_page=False)
        print(f"  Full screenshot: {full_path}")

        # Cropped navbar
        nav_path = f"/Users/nilanshgupta/convertwise-website/screenshots/{prefix}_{label}_navbar.png"
        capture_navbar_crop(page, nav_path, scale=2)

        browser.close()


if __name__ == "__main__":
    BASE = "http://localhost:5173"

    # Desktop
    capture(BASE, "desktop", viewport_width=1440, viewport_height=900, dark_mode=False)
    capture(BASE, "desktop", viewport_width=1440, viewport_height=900, dark_mode=True)

    # Mobile
    capture(BASE, "mobile",  viewport_width=375,  viewport_height=812, dark_mode=False)
    capture(BASE, "mobile",  viewport_width=375,  viewport_height=812, dark_mode=True)

    print("\nAll done.")
