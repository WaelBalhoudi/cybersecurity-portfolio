# Wael Balhoudi: Cybersecurity Portfolio

Static site (HTML, CSS, vanilla JS, Particles.js via CDN). No build step.

## Run locally
```bash
cd portfolio
python3 -m http.server 8000   # then open http://localhost:8000
```

## Add your files
- `assets/files/Wael-Balhoudi-CV.pdf`: your CV (the Download buttons point here)
- `assets/images/`: `profile.png`, `opensoc-lab.png`, `web-security.png`, `ransomware-simulation.png`, `autocloud-enterprise.png`, `cryptshield.png`, `devops-deployment.png`, `agrilink.png` (16:9 screenshots work best). Missing images fall back to a styled placeholder.

## Maintain content
- Projects, expertise and skills: `js/projects.js`. Set `github: null` when there is no public repository; the card then shows "Repository not public" instead of a fake link. Add real URLs for Web Security Labs, Ransomware Simulation and AutoCloud once published.
- Colors and fonts: CSS variables at the top of `css/style.css`.

## Contact form (Formspree)
1. Create a free form at formspree.io and copy its ID.
2. In `js/main.js`, replace `YOUR_FORM_ID` in `FORM_ENDPOINT`.
Until you do, the form shows a message pointing to your email instead of pretending to send.

## Deploy
- **Vercel:** push to GitHub, import the repo, framework preset "Other", no build command, output directory `.`.
- **GitHub Pages:** Settings → Pages → deploy from the `main` branch, root folder.
Update the `og:url` in `index.html` if your domain differs.
