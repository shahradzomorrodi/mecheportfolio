import robotBuilt from "@/assets/robot-built.jpg";
import robotCad from "@/assets/robot-cad.jpg";
import droneCad from "@/assets/drone-cad.jpg";
import droneArch from "@/assets/drone-arch.jpg";
import slatStreamlines from "@/assets/slat-streamlines.jpg";
import slatCfd from "@/assets/slat-cfd.jpg";
import pinfinTest from "@/assets/pinfin-test.jpg";
import pinfinSim from "@/assets/pinfin-sim.jpg";
import clockBuilt from "@/assets/clock-built.jpg";
import clockCad from "@/assets/clock-cad.jpg";
import controlsApparatus from "@/assets/controls-apparatus.jpg";
import controlsResponse from "@/assets/controls-tuned-response.jpg";

export type Project = {
  slug: string;
  index: string;
  category: string;
  title: string;
  org: string;
  date: string;
  summary: string;
  cover: string;
  images: { src: string; caption: string }[];
  what: string[];
  how: string[];
  results: string[];
  stats: { value: string; label: string }[];
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "robot-design-build",
    index: "01",
    category: "Design, Build, Test",
    title: "Competition Robot",
    org: "UC San Diego · Mechanical Design",
    date: "Sept to Nov 2024",
    summary:
      "A compact robot that drives, rotates an arm, and grasps objects with a geared claw. Engineered end to end from concept sketches through scored competition runs using **Fusion 360**, **GD&T**, **Soldering**, and quasi-static force analysis.",
    cover: robotBuilt,
    images: [
      { src: robotBuilt, caption: "As-built robot: claw, rotating arm, friction drivetrain." },
      { src: robotCad, caption: "Fusion 360 CAD with labeled subassemblies." },
    ],
    what: [
      "Compact robot that drives, rotates an arm, and grasps objects with a geared claw.",
      "Built end to end: concept sketches, Pugh-chart selection, CAD, fabrication, and scored testing.",
    ],
    how: [
      "Claw: interlocking spur gears that open and close the gripper arms.",
      "Rotating arm: a 6.75:1 compound gear train driven by a geared DC motor.",
      "Friction drivetrain: motors, mounts, axle holders, and friction wheels.",
      "Quasi-static force analysis and free body diagrams; aluminum and **3D Printing** parts.",
      "Electrical: hand-soldered the motor and switch wiring for the drivetrain.",
    ],
    results: [
      "Lifted a 250 g payload (390 g total), beating the 300 g target.",
      "Drivetrain produced 3.48 N pushing force versus a 2.5 N requirement.",
      "Scored double the point target on the competition table.",
    ],
    stats: [
      { value: "3.48 N", label: "pushing force" },
      { value: "250 g", label: "payload lifted" },
      { value: "2×", label: "points vs. target" },
    ],
    tools: ["Fusion 360", "AutoCAD", "Laser cutter", "3D printing", "Machining", "Soldering"],
  },
  {
    slug: "evtol-wildfire-drone",
    index: "02",
    category: "UAV Systems",
    title: "eVTOL Wildfire-Response Quadcopter",
    org: "Team Whiplash · VFS Competition",
    date: "Nov 2024 to June 2025",
    summary:
      "Remote-controlled electric VTOL quadcopter optimized for wildfire response: waypoint navigation, precision hover, and payload delivery, driven by a full avionics and **Power Distribution** stack.",
    cover: droneCad,
    images: [
      { src: droneCad, caption: "As-built quadcopter with payload bottles and avionics." },
      { src: droneArch, caption: "Electrical architecture: power, ESCs, avionics chain." },
    ],
    what: [
      "Remote-controlled electric VTOL quadcopter built for the VFS competition.",
      "Optimized for wildfire response: waypoint nav, precision hover, payload delivery mechanism.",
    ],
    how: [
      "Designed a dual-battery system: a 6S LiPo propulsion pack plus a dedicated FC battery.",
      "Wired four 80 A ESCs through a central **Power Distribution** board, with all **Circuit Design** and **Soldering** done in house.",
      "Integrated the **Pixhawk Flight Controllers** stack with a Raspberry Pi companion, telemetry, and RC links.",
    ],
    results: [
      "49.6 N total thrust versus 39.2 N weight, a 1.26 thrust-to-weight ratio.",
      "Isolated FC power removes voltage sag under full motor load.",
      "Clean PWM signal chain gives stable thrust for hovering and payload drops.",
    ],
    stats: [
      { value: "49.6 N", label: "total thrust" },
      { value: "1.26", label: "thrust-to-weight" },
      { value: "6S / 80A", label: "power arch." },
    ],
    tools: ["Pixhawk 4", "Raspberry Pi", "Power distribution", "ESC config", "Harness design"],
  },
  {
    slug: "leading-edge-slat",
    index: "03",
    category: "Aerodynamics",
    title: "Leading-Edge Slat Aerodynamics",
    org: "Experimental & Computational Study",
    date: "Jan to Mar 2026",
    summary:
      "How a custom leading-edge slat changes flow over a NACA 8612 airfoil at high angle of attack. Hele-Shaw flow visualization validated against **ANSYS** Fluent **CFD**.",
    cover: slatStreamlines,
    images: [
      { src: slatStreamlines, caption: "Dye-flow visualization with MATLAB-detected streamlines." },
      { src: slatCfd, caption: "ANSYS Fluent velocity contour and recirculation pathlines." },
    ],
    what: [
      "Studied how a custom leading-edge slat changes flow over a NACA 8612 airfoil at high AoA.",
      "Used a Hele-Shaw flow table to visualize streamlines and validate theory against **CFD**.",
    ],
    how: [
      "Processed dye-flow imagery in **MATLAB** for streamline and dye-coverage extraction.",
      "Validated against **ANSYS** Fluent **CFD** and potential-flow solutions.",
      "Half-body Rankine case confirmed source strength to within 1%.",
    ],
    results: [
      "Slat delayed critical stall from ~12° to 20°.",
      "Peak lift coefficient rose ~30%, confirming the high-lift benefit.",
      "Flow-table testing proved effective for early high-lift screening.",
    ],
    stats: [
      { value: "12 to 20°", label: "stall delay" },
      { value: "+30%", label: "peak lift" },
      { value: "<1%", label: "validation error" },
    ],
    tools: ["ANSYS Fluent", "MATLAB", "Hele-Shaw flow table", "Image processing"],
  },
  {
    slug: "pin-fin-heat-sink",
    index: "04",
    category: "Thermal Analysis",
    title: "Pin-Fin Heat Sink Characterization",
    org: "Experimental & Computational Study",
    date: "Jan to Mar 2026",
    summary:
      "Convective heat transfer characterization of a bare plate and two pin-fin arrays across free convection, forced laminar, and forced turbulent flow regimes, simulated in **Fusion 360**.",
    cover: pinfinTest,
    images: [
      { src: pinfinTest, caption: "Pin-fin test articles on the heated plate." },
      { src: pinfinSim, caption: "Fusion 360 thermal-gradient simulation of the V-pattern." },
    ],
    what: [
      "Convective heat transfer characterization of a bare plate and two pin-fin arrays.",
      "Tested across free convection, forced laminar, and forced turbulent flow.",
    ],
    how: [
      "Measured Nusselt and Reynolds numbers, heat-transfer coefficients, and surface temperatures.",
      "Fit a power-law Nu to Re correlation and verified against a **Fusion 360** thermal simulation.",
    ],
    results: [
      "V-pattern array raised the Nusselt number ~90% over the bare plate.",
      "Surface temperature dropped from 44.7 °C to 32.8 °C at equal power.",
      "Fit Nu = 0.220 · Re⁰·⁶⁷⁸; applicable to avionics cooling.",
    ],
    stats: [
      { value: "+89%", label: "Nusselt vs. bare" },
      { value: "44.7 to 32.8 °C", label: "surface temp" },
      { value: "3", label: "flow regimes" },
    ],
    tools: ["Fusion 360 Thermal", "Heat transfer", "Power-law fitting", "Lab instrumentation"],
  },
  {
    slug: "escapement-pendulum-clock",
    index: "05",
    category: "Mechanism Design",
    title: "Escapement Pendulum Clock",
    org: "Mechanical Design Project",
    date: "Dec 2024 to Feb 2025",
    summary:
      "A working acrylic pendulum-and-escapement clock designed as a sculptural form. Modeled in **Fusion 360** and **AutoCAD**, then **Laser Cutting** the parts and comparing two rigid-body timing models against measured behavior.",
    cover: clockBuilt,
    images: [
      { src: clockBuilt, caption: "Finished laser-cut acrylic mechanism." },
      { src: clockCad, caption: "Fusion 360 inertial analysis: COM and moment of inertia." },
    ],
    what: [
      "A working acrylic pendulum-and-escapement clock, designed as a sculptural form.",
      "Built to compare two timing models against measured escapement behavior.",
    ],
    how: [
      "Designed in **Fusion 360** and **AutoCAD**; fabricated with **Laser Cutting** and shop tools.",
      "Modeled timing two ways: point-mass and full rigid-body (moment of inertia).",
      "Measured the real escapement period across five trials.",
    ],
    results: [
      "Rigid-body model predicted timing within 0.96% (9.17 s vs. 9.26 s).",
      "Point-mass model was off by 21%, mass distribution matters.",
      "Traced residual error to acrylic-thickness tolerance (0.605 vs. 0.635 cm).",
    ],
    stats: [
      { value: "0.96%", label: "rigid-body err." },
      { value: "21%", label: "point-mass err." },
      { value: "5", label: "trials" },
    ],
    tools: ["Fusion 360", "AutoCAD", "Laser cutting", "Dynamics modeling"],
  },
  {
    slug: "rotational-position-control",
    index: "06",
    category: "Controls",
    title: "Rotational Position Control (PID Tuning)",
    org: "UC San Diego · MAE 171A Feedback Control",
    date: "Winter 2026",
    summary:
      "Modeled a 2-DOF torsional control system on real DSP-controlled hardware and tuned a **PID** controller by **root locus** design, closing a steady-state error the calculated gains left unresolved.",
    cover: controlsApparatus,
    images: [
      {
        src: controlsApparatus,
        caption: "The ECP 2-DOF rotational torsion control apparatus: two disks, torsional spring, DSP real-time controller.",
      },
      {
        src: controlsResponse,
        caption: "Final tuned PID controller: simulated vs. measured 1000-count step response.",
      },
    ],
    what: [
      "Modeled and controlled a 2-DOF rotational torsion system on a real DSP-controlled test rig.",
      "Built for UCSD's MAE 171A feedback control course.",
    ],
    how: [
      "Extracted moment of inertia, torsional damping, and stiffness from 1-DOF step-response experiments, validating the model against simulation before closing the loop.",
      "Designed a **PID** controller by **root locus**: proportional gain alone left 63.2% overshoot, so added derivative action for damping and integral action to remove steady-state error.",
      "Calculated gains reached the setpoint but left residual steady-state error; iteratively increased Ki and Kd to converge on 1000 encoder counts within spec.",
    ],
    results: [
      "Final tuned gains (Kp=0.2, Ki=0.2, Kd=0.019) produced 20.8% overshoot and a 1.40s settling time on a 1000-count step, meeting the <25% overshoot target.",
      "Steady-state error converged to 0.1%, versus the calculated gains that failed to settle at the commanded position at all.",
    ],
    stats: [
      { value: "20.8%", label: "overshoot (target <25%)" },
      { value: "1.40 s", label: "settling time" },
      { value: "0.1%", label: "steady-state error" },
    ],
    tools: ["PID control", "Root locus design", "MATLAB", "DSP real-time control", "System identification"],
  },
];

export const profile = {
  name: "Shahrad Zomorrodi",
  citizenship: "U.S. Citizen",
  role: "Mechanical Engineering",
  school: "University of California, San Diego",
  grad: "B.S. Mechanical Engineering · Expected March 2027",
  email: "shahradzomorrodi@gmail.com",
  linkedin: "https://www.linkedin.com/in/shahradzomorrodi",
  github: "https://github.com/shahradzomorrodi",
  portfolio: "https://shahradzomorrodi.com",
  resume: "/shahrad-zomorrodi-resume.pdf",
  tagline:
    "I build systems where mechanical hardware meets rigorous analysis, from CFD-validated aerodynamics and thermal characterization to flight-ready eVTOL avionics and competition robotics.",
};

export const skills = {
  "Engineering Software": [
    "SolidWorks",
    "Fusion 360",
    "Creo Parametric",
    "CATIA",
    "AutoCAD",
    "Revit",
    "ANSYS Fluent",
    "Bluebeam Revu",
    "MATLAB",
    "Python",
  ],
  "Fabrication & Methods": [
    "GD&T",
    "CFD",
    "Linear Controls",
    "3D Printing",
    "Laser Cutting",
    "Machining",
    "Sheet Metal",
    "Injection Molding",
    "Soldering",
    "Prototyping",
  ],
  Electronics: ["Circuit Design", "Arduino", "Pixhawk Flight Controllers", "Power Distribution"],
};

export type Experience = {
  company: string;
  location: string;
  role: string;
  date: string;
  bullets: string[];
  spotlight?: {
    url: string;
  };
};

export const experience: Experience[] = [
  {
    company: "Gouvis Engineering Consulting Group, Inc.",
    location: "Irvine, CA",
    role: "Plumbing Engineering Intern",
    date: "June 2026 to Sept 2026",
    bullets: [
      "Designing plumbing systems for residential and commercial buildings: water distribution, drainage/waste/vent, and gas piping in AutoCAD and Revit.",
      "Performing pipe sizing and fixture-unit calculations against the California Plumbing Code and Title 24.",
      "Coordinating with mechanical, electrical, and architectural teams on multi-disciplinary projects.",
    ],
    spotlight: {
      url: "https://www.linkedin.com/posts/gouvis-engineering_engineeringinternship-mechanicalengineering-activity-7361821953474678786-P42k",
    },
  },
  {
    company: "Gouvis Engineering Consulting Group, Inc.",
    location: "Irvine, CA",
    role: "HVAC Engineering Intern",
    date: "June 2025 to Sept 2025",
    bullets: [
      "Supported HVAC system design by performing load calculations to ASHRAE standards and engineering codes.",
      "Produced and reviewed mechanical plan sets for residential and commercial buildings in AutoCAD and Bluebeam Revu.",
    ],
  },
  {
    company: "Vertical Flight Society",
    location: "San Diego, CA",
    role: "Embedded & Electronics Lead",
    date: "Nov 2024 to June 2025",
    bullets: [
      "Led electrical integration for an eVTOL firefighting drone—batteries, ESCs, Pixhawk 4, and a hand-soldered wiring harness—reaching 49.6 N thrust at a 1.26 thrust-to-weight ratio.",
      "Designed and tested payload delivery mechanisms through iterative prototyping.",
      "Coordinated with mechanical and controls teams on power distribution, weight, and system safety.",
      "Mentored new members through embedded systems fundamentals and hardware/software debugging.",
    ],
  },
];
