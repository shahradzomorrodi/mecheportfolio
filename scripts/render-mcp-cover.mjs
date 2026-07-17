import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "src", "assets", "mcp-beam-analysis-cover.png");
const chrome = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find((candidate) => candidate && existsSync(candidate));

if (!chrome) throw new Error("Chrome or Edge is required to render the MCP cover image.");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; }
  html, body { width: 1600px; height: 900px; margin: 0; overflow: hidden; }
  body {
    background: #070a0f;
    color: #f4f7fb;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
  }
  .frame {
    position: relative;
    width: 100%; height: 100%;
    padding: 58px 68px 54px;
    background-image:
      linear-gradient(rgba(105, 225, 255, .055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(105, 225, 255, .055) 1px, transparent 1px);
    background-size: 42px 42px;
  }
  .frame::before {
    content: "";
    position: absolute; inset: 22px;
    border: 1px solid #26313d;
    pointer-events: none;
  }
  .topbar { display: flex; align-items: center; justify-content: space-between; }
  .tool-id { display: flex; align-items: center; gap: 14px; color: #75e7ff; font: 700 19px/1.2 Consolas, monospace; letter-spacing: 2px; }
  .pulse { width: 11px; height: 11px; background: #75e7ff; box-shadow: 0 0 18px #75e7ff; }
  .protocol { color: #92a0af; font: 600 16px/1.2 Consolas, monospace; letter-spacing: 1.4px; }
  h1 { margin: 38px 0 10px; max-width: 1050px; font-size: 69px; line-height: 1.02; letter-spacing: 0; }
  .dek { color: #a8b3bf; font-size: 24px; line-height: 1.4; }
  .content { display: grid; grid-template-columns: 1.08fr .92fr; gap: 44px; margin-top: 42px; }
  .panel { border: 1px solid #2c3947; background: rgba(8, 13, 20, .94); min-height: 416px; }
  .panel-label { padding: 15px 20px; border-bottom: 1px solid #2c3947; color: #8190a0; font: 700 14px/1.2 Consolas, monospace; letter-spacing: 1.5px; }
  .diagram { position: relative; height: 335px; margin: 24px 30px 0; }
  .wall { position: absolute; left: 55px; top: 70px; width: 20px; height: 205px; background: #526171; }
  .wall::after { content: ""; position: absolute; left: -16px; top: 0; width: 16px; height: 205px; background: repeating-linear-gradient(-45deg,#263441 0 5px,#526171 5px 10px); }
  .beam { position: absolute; left: 75px; top: 151px; width: 500px; height: 24px; background: #dbe5ed; box-shadow: 0 0 22px rgba(117,231,255,.22); }
  .tip { position: absolute; left: 568px; top: 145px; width: 38px; height: 38px; border-radius: 50%; border: 8px solid #dbe5ed; background: #070a0f; }
  .arrow { position: absolute; left: 583px; top: 28px; width: 4px; height: 105px; background: #ff5864; }
  .arrow::after { content: ""; position: absolute; left: -11px; bottom: -1px; border-left: 13px solid transparent; border-right: 13px solid transparent; border-top: 20px solid #ff5864; }
  .load { position: absolute; left: 535px; top: 0; color: #ff7b84; font: 700 18px/1 Consolas, monospace; }
  .dimension { position: absolute; left: 76px; top: 218px; width: 500px; height: 35px; border-left: 2px solid #75e7ff; border-right: 2px solid #75e7ff; border-bottom: 2px solid #75e7ff; }
  .dimension span { position: absolute; top: 12px; width: 100%; text-align: center; color: #75e7ff; font: 700 17px/1 Consolas, monospace; }
  .material { position: absolute; left: 72px; top: 280px; color: #9eabb8; font: 16px/1.55 Consolas, monospace; }
  .results { padding: 28px 30px 25px; }
  .result-row { display: flex; justify-content: space-between; align-items: baseline; padding: 11px 0; border-bottom: 1px solid #202b36; }
  .result-row span { color: #9aa8b7; font: 16px/1.2 Consolas, monospace; }
  .result-row strong { font: 700 24px/1.2 Consolas, monospace; }
  .danger { color: #ff6a74; }
  .verdict { display: flex; justify-content: space-between; align-items: center; margin-top: 25px; padding: 22px 24px; border: 1px solid #ff5864; background: rgba(255, 88, 100, .09); }
  .verdict small { display: block; margin-bottom: 6px; color: #ff9aa1; font: 700 13px/1 Consolas, monospace; letter-spacing: 1.5px; }
  .verdict b { font-size: 34px; letter-spacing: .5px; }
  .verdict .fos { color: #ff6a74; font: 800 54px/1 Consolas, monospace; }
  .flow { display: flex; align-items: center; justify-content: center; gap: 17px; margin-top: 33px; color: #c8d2dc; font: 700 15px/1 Consolas, monospace; letter-spacing: .5px; }
  .flow span { padding: 11px 16px; border: 1px solid #354453; background: #0b1119; }
  .flow i { color: #75e7ff; font-style: normal; font-size: 22px; }
</style>
</head>
<body>
  <main class="frame">
    <div class="topbar">
      <div class="tool-id"><span class="pulse"></span>MCP TOOL CALL / BEAM_ANALYSIS</div>
      <div class="protocol">DETERMINISTIC ENGINEERING OUTPUT</div>
    </div>
    <h1>Will this steel rod yield?</h1>
    <div class="dek">The AI assistant calls a tested engineering tool instead of guessing the answer.</div>
    <section class="content">
      <div class="panel">
        <div class="panel-label">PHYSICAL MODEL</div>
        <div class="diagram">
          <div class="wall"></div><div class="beam"></div><div class="tip"></div>
          <div class="arrow"></div><div class="load">500 N</div>
          <div class="dimension"><span>L = 0.80 m</span></div>
          <div class="material">AISI 1018 STEEL<br>DIAMETER = 20 mm</div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-label">CHECKABLE RESULT</div>
        <div class="results">
          <div class="result-row"><span>MAX STRESS</span><strong class="danger">509 MPa</strong></div>
          <div class="result-row"><span>YIELD STRENGTH</span><strong>370 MPa</strong></div>
          <div class="result-row"><span>MAX DEFLECTION</span><strong>53.0 mm</strong></div>
          <div class="verdict">
            <div><small>ENGINEERING VERDICT</small><b>UNSAFE</b></div>
            <div class="fos">FoS 0.73</div>
          </div>
        </div>
      </div>
    </section>
    <div class="flow"><span>AI ASSISTANT</span><i>→</i><span>MCP TOOL</span><i>→</i><span>VALIDATED CALCULATION</span></div>
  </main>
</body>
</html>`;

const work = mkdtempSync(join(tmpdir(), "mcp-cover-"));
const source = join(work, "cover.html");
const profile = join(work, "chrome-profile");
writeFileSync(source, html, "utf8");

try {
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--user-data-dir=${profile}`,
    "--window-size=1600,900",
    `--screenshot=${output}`,
    `file:///${source.replaceAll("\\", "/")}`,
  ]);
  console.log(`Rendered ${output}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
