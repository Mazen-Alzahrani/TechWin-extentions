import { useState } from "react";
import { Switch } from "@headlessui/react";
import devlens from "./assets/images/logo-devlens.svg";
import favicon from "./assets/images/favicon-32x32.png";
import moon from "./assets/images/icon-moon.svg";
import sun from "./assets/images/icon-sun.svg";
import console from "./assets/images/logo-console-plus.svg";
import dom from "./assets/images/logo-dom-snapshot.svg";
import grid from "./assets/images/logo-grid-guides.svg";
import json from "./assets/images/logo-json-wizard.svg";
import link from "./assets/images/logo-link-checker.svg";
import markup from "./assets/images/logo-markup-notes.svg";
import palette from "./assets/images/logo-palette-picker.svg";
import speed from "./assets/images/logo-speed-boost.svg";
import style from "./assets/images/logo-style-spy.svg";
import tab from "./assets/images/logo-tab-master-pro.svg";
import viewport from "./assets/images/logo-viewport-buddy.svg";
import logo from "./assets/images/logo-dark-mod.svg";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040918] to-[#091540] text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-[#1c243c] rounded-2xl mx-20 lg:h-15 p-3">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-30 h-8" />
        </div>

        <button className="w-8.5 h-8.5 border border-white/20 flex justify-center rounded-lg hover:ring-2 ring-red-400">
          <img src={sun} className="flex m-2" />
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-between mb-8 mx-20">
        <h1 className="font-bold">Extentions List</h1>
        <div className="flex gap-1 sm:gap-2 lg:gap-3">
          <button className="bg-red-400 text-black px-4 py-1 rounded-full text-sm hover:ring ring-red-400 hover:text-black hover:bg-red-400 p-2 border border-black focus:focus-outline-2 focus:focus-outline-white-300">
            All
          </button>
          <button className="bg-[#1c243c] px-4 py-1 rounded-full text-sm hover:ring ring-red-400 p-2 border border-white/20 focus: focus-outline-2  focus:focus-outline-white">
            Active
          </button>
          <button className="bg-[#1c243c] px-4 py-1 rounded-full text-sm hover:ring ring-red-400 p-2 border border-white/20">
            Inactive
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mx-20">
        {/* Card 1 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={devlens} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">DevLens</h2>
              <p className="text-sm text-white/70">Development is cool</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={style} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">StyleSpy</h2>
              <p className="text-sm text-white/70">Instantly analyze CSS</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={speed} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">SpeedBoost</h2>
              <p className="text-sm text-white/70">Faster page loading</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(226,11%,37%)]">
              <span class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={json} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">JSONWizard</h2>
              <p className="text-sm text-white/70">Format JSON easily</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={tab} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">TabMaster</h2>
              <p className="text-sm text-white/70">Organize your tabs</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={viewport} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">ViewportBuddy</h2>
              <p className="text-sm text-white/70">Screen size preview</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(226,11%,37%)]">
              <span class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={markup} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">Markup Notes</h2>
              <p className="text-sm text-white/70">
                Enables annotation and notes directly onto webpages for
                collaborative debugging.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={grid} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">GridGuides</h2>
              <p className="text-sm text-white/70">
                Overlay customizable grids and alignment guides on any webpage.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(226,11%,37%)]">
              <span class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={palette} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">Palette Picker</h2>
              <p className="text-sm text-white/70">
                Instantly extracts color palettes from any webpage.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 10 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={link} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">LinkChecker</h2>
              <p className="text-sm text-white/70">
                Scans and highlights broken links on any page.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={dom} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">DOM Snapshot</h2>
              <p className="text-sm text-white/70">
                Capture and export DOM structures quickly.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(226,11%,37%)]">
              <span class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div className="bg-[#1c243c] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="flex gap-4">
            <img src={console} className="w-12 h-12" />
            <div>
              <h2 className="font-bold">ConsolePlus</h2>
              <p className="text-sm text-white/70">
                Enhanced developer console with advanced filtering and logging.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-sm text-white/70 hover:ring-2 ring-red-400 p-2 border  border-white/20 rounded-full">
              Remove
            </button>

            <div class="relative w-11 h-6 rounded-full bg-[hsl(3,77%,44%)]">
              <span class="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
