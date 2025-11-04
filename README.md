# 💧 Gießplan & Pflege-Checker

> 🌿 Eine moderne, interaktive Web-App zur Berechnung der optimalen Pflanzenpflege  
> — entwickelt in **HTML**, **CSS** und **JavaScript**.

---

## 🚀 Übersicht

Der **Gießplan & Pflege-Checker** hilft dir, das richtige Gleichgewicht zwischen  
**Wasser**, **Licht** und **Pflegeintervall** für deine Pflanzen zu finden.  
Basierend auf **Topfgröße** und **Lampenleistung** berechnet die App:

- 💧 **Gießmenge pro Vorgang**  
- 🧴 **Spülmenge bei Überdüngung**  
- ⏳ **Gießintervall in Tagen**

Die Anwendung funktioniert **vollständig offline** und kann einfach im Browser geöffnet werden —  
kein Server, keine Installation, kein Login.

---

## 🪴 Features

✨ **Einfach & Schnell:** Eingabe → Klick → Ergebnis  
🎨 **Modernes Design:** Bootstrap 5, responsive Layout  
💾 **Speichert Werte automatisch:** LocalStorage merkt sich deine letzten Eingaben  
🔁 **Zurücksetzen:** Mit einem Klick zu den Standardwerten  
⚠️ **Eingabeprüfung:** Fängt ungültige Werte sauber ab  
🌓 **Optionaler Darkmode** (erweiterbar)

---

## 🧩 Projektstruktur

giessplan-app/
│
├── index.html # Hauptseite – Struktur und Layout
├── style.css # Design & Styling
└── script.js # Berechnungslogik & Interaktion

---

## 🧠 Berechnungslogik

| Parameter | Formel | Beschreibung |
|------------|---------|--------------|
| 💧 **Gießmenge** | 0.20–0.25 × Topfvolumen | Empfohlene Wassermenge pro Vorgang |
| 🧴 **Spülmenge** | 3 × Topfvolumen | Wassermenge bei Überdüngung |
| ⏳ **Intervall** | abhängig von Lampenleistung | < 300 W → 4–6 Tage; ≥ 300 W → 3–5 Tage; ≥ 600 W → 2–4 Tage |

---

## ⚙️ Verwendung

1. Lade das Projekt herunter oder klone das Repository:

   ```bash
   git clone https://github.com/DEIN-GITHUB/giessplan-app.git
   cd giessplan-app
   ```

   Beispiel — Eingabe & Ausgabe:

   ```text
   Topfvolumen: 40 L
   Lampenleistung: 200 W

   💧 Gießmenge: 8.0–10.0 L
   🧴 Spülmenge: 120 L
   ⏳ Gießintervall: 4–6 Tage
   ```

| Technologie               | Verwendung                                |
| ------------------------- | ----------------------------------------- |
| 🧱 **HTML5**              | Struktur der Seite                        |
| 🎨 **CSS3 / Bootstrap 5** | Styling, Layout und Responsivität         |
| ⚙️ **JavaScript (ES6)**   | Berechnungen, Logik und DOM-Manipulation  |
| 💾 **LocalStorage**       | Speichert Nutzereingaben lokal im Browser |

🧹 Erweiterungsmöglichkeiten

🌗 Darkmode-Umschalter mit CSS-Variablen

🌸 Weitere Pflanzenparameter (z. B. Temperatur, Luftfeuchtigkeit)

📱 PWA-Unterstützung (App auf dem Handy installierbar)

📊 Diagramm-Ausgabe (z. B. wöchentlicher Wasserverbrauch)


📄 Lizenz

Dieses Projekt wurde zu Lern- und Demonstrationszwecken erstellt.
Du darfst es frei nutzen, verändern und erweitern.

Autor: 🧑‍💻 Eugen Beirit
Version: 1.0.0
Stand: November 2025
