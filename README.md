# Basel Abu Sablih – portfolio

Static site, no build step. Deployed on Netlify at https://baselabusablih.netlify.app.

- `index.html` – page structure and the English text
- `js/content.js` – projects, experience, education and all Norwegian text
- `js/main.js` – language and theme toggles, rendering, contact form (Web3Forms)
- `css/style.css` – all styles; colours are tokens at the top
- `documents/` – CVs in English and Norwegian

Run locally: `python3 -m http.server` and open http://localhost:8000. Add `?lang=no` for Norwegian.

The hero graph is real oscilloscope data from the bachelor's thesis (`MQTTSim/scope/scope_data.csv`).
