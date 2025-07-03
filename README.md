# 🧾 InScripts React Internship Assignment – Spreadsheet UI Clone

This project is a **static, front-end-only React prototype** that visually replicates the given Figma design of a spreadsheet UI.  
The goal was to simulate a clean and responsive mini spreadsheet-like UI similar to Google Sheets using **React**, **TypeScript**, and **Tailwind CSS**.

---

## 📌 Assignment Overview

> **Goal:**  
Build a pixel-perfect static spreadsheet view in React that matches the provided Figma screenshot.

> **Tech Stack Used:**
- React 18 (via Vite)
- TypeScript (strict mode)
- Tailwind CSS for utility-first styling
- React Icons for UI elements
- Minimal state management (local state only)

---

## 🎓 Learnings & Skills Improved

- Responsive UI layout with Tailwind CSS  
- JSX with TypeScript in strict mode  
- Reusable functional components (Toolbar, Sidebar, Header, Badges)  
- Git/GitHub workflow + live deployment  
- ESLint + Prettier setup with TypeScript checks  
- Design-to-code pixel-matching from Figma  

---

## 📁 Folder Structure

inscripts-assignment/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.tsx
│ │ ├── Toolbar.tsx
│ │ ├── Sidebar.tsx
│ │ ├── Spreadsheet.tsx
│ │ ├── CellBadge.tsx
│ ├── types/
│ │ └── table.ts
│ ├── assets/
│ │ └── react.svg
│ ├── App.tsx
│ ├── main.tsx
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── package.json
├── index.html
└── README.md

yaml
Copy
Edit

---

## 🚀 Live Demo

🟢 **Hosted URL**:  
🔗 [https://inscripts-assignment-murex.vercel.app](https://inscripts-assignment-murex.vercel.app)

---

## 📸 Screenshot

> 📷 Spreadsheet UI – Final Output  
> _(Matches Figma pixel-perfectly with functional components and console-logged actions)_

![Spreadsheet Screenshot](./assets/screenshot.png)

> 📌 *Place your screenshot as `screenshot.png` inside `src/assets` and update the path if needed.*

---

## 🧰 Getting Started (Local Setup)

```bash
# Clone the repository
git clone https://github.com/your-username/inscripts-assignment.git

# Navigate to the project folder
cd inscripts-assignment

# Install dependencies
npm install

# Run the dev server
npm run dev

# Lint check
npm run lint

# TypeScript check
npm run type-check
🧪 Acceptance Criteria Checklist
 Pixel-perfect layout matching Figma

 Sort, Filter, Cell View, Toolbar, and Sheet Tabs

 No dead UI – All buttons log to console

 Clean folder structure

 Lint + Type Check passed

 Live hosted URL on Vercel

 Readable commit history
```

📄 License
This project is open source under the MIT License.
See the LICENSE file for details.

🙌 Acknowledgment
Thanks to InScripts for the opportunity and this amazing React UI challenge!
Design reference was taken from the shared Figma.
