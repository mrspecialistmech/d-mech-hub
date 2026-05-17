import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "s1",
    slug: "3d-cad-design",
    name: "3D CAD Design",
    shortDescription:
      "Precision 3D solid modelling for industrial components and assemblies.",
    description:
      "Expert 3D parametric modelling for industrial components, assemblies, and complex mechanical systems. We deliver production-ready models with full design intent, tolerances, and BOM.",
    icon: "Layers",
    features: [
      "Parametric solid modelling (SolidWorks / CATIA / Fusion 360)",
      "Assembly design with motion simulation",
      "Detail drawings with GD&T callouts",
      "Design for Manufacture (DFM) review",
      "3D PDF and STEP export",
      "Revision-controlled drawing packages",
    ],
    deliveryTime: "3–7 business days",
    fileFormats: ["STEP", "IGES", "DXF", "DWG", "PDF", "SLDPRT"],
    software: ["SolidWorks", "CATIA V5", "Autodesk Fusion 360", "AutoCAD"],
    standards: ["ISO 2768", "ASME Y14.5", "DIN", "BS 8888"],
    images: [
      "https://picsum.photos/seed/cad1/800/600",
      "https://picsum.photos/seed/cad2/800/600",
      "https://picsum.photos/seed/cad3/800/600",
      "https://picsum.photos/seed/cad4/800/600",
    ],
  },
  {
    id: "s2",
    slug: "3d-printing",
    name: "3D Printing & Rapid Prototyping",
    shortDescription:
      "From CAD to physical prototype in days with FDM, SLA and SLS technologies.",
    description:
      "Rapid physical prototyping using FDM, SLA, and SLS technologies. Ideal for functional testing, client presentations, and fit-check before committing to production tooling.",
    icon: "Printer",
    features: [
      "FDM printing (PLA, ABS, PETG, TPU, Nylon)",
      "SLA resin printing for fine details",
      "SLS nylon for functional parts",
      "Post-processing: sanding, painting, priming",
      "Batch production up to 100 parts",
      "Assembly mock-ups and jigs",
    ],
    deliveryTime: "2–5 business days",
    fileFormats: ["STL", "OBJ", "3MF", "STEP"],
    software: ["SolidWorks", "Cura", "PrusaSlicer", "Chitubox"],
    standards: ["ISO 17296", "ASTM F2792"],
    images: [
      "https://picsum.photos/seed/prnt1/800/600",
      "https://picsum.photos/seed/prnt2/800/600",
      "https://picsum.photos/seed/prnt3/800/600",
      "https://picsum.photos/seed/prnt4/800/600",
    ],
  },
  {
    id: "s3",
    slug: "sheet-metal-design",
    name: "Sheet Metal Design",
    shortDescription:
      "Unfold, blank, and fabrication-ready sheet metal drawings.",
    description:
      "End-to-end sheet metal design from concept to flat-pattern and fabrication drawings. We account for bend allowances, K-factors, and real-world tooling constraints.",
    icon: "Grid3x3",
    features: [
      "Parametric sheet metal modelling",
      "Flat pattern / blank development",
      "Bend allowance calculations",
      "CNC laser / punch / press-brake ready DXFs",
      "Hardware insertion (PEM, rivets, studs)",
      "Weldment design and sub-assembly drawings",
    ],
    deliveryTime: "3–6 business days",
    fileFormats: ["DXF", "DWG", "STEP", "PDF", "SLDPRT"],
    software: ["SolidWorks", "SolidEdge", "AutoCAD"],
    standards: ["ISO 2768", "DIN 6935", "ASME Y14.5"],
    images: [
      "https://picsum.photos/seed/smt1/800/600",
      "https://picsum.photos/seed/smt2/800/600",
      "https://picsum.photos/seed/smt3/800/600",
      "https://picsum.photos/seed/smt4/800/600",
    ],
  },
  {
    id: "s4",
    slug: "new-product-development",
    name: "New Product Development",
    shortDescription:
      "From concept to market-ready product with full NPD cycle support.",
    description:
      "Full-cycle new product development — concept sketching, feasibility analysis, industrial design, engineering, prototyping, testing, and production documentation.",
    icon: "Lightbulb",
    features: [
      "Concept sketching and ideation",
      "Industrial design (ID) rendering",
      "Feasibility and DFM/DFA analysis",
      "Functional prototype builds",
      "Testing and validation support",
      "Production-ready drawing packages",
    ],
    deliveryTime: "2–8 weeks (project-dependent)",
    fileFormats: ["STEP", "PDF", "DXF", "IGES", "Rendering files"],
    software: ["SolidWorks", "CATIA V5", "KeyShot", "Adobe CC"],
    standards: ["ISO 9001", "DFM best practices", "IEC standards"],
    images: [
      "https://picsum.photos/seed/npd1/800/600",
      "https://picsum.photos/seed/npd2/800/600",
      "https://picsum.photos/seed/npd3/800/600",
      "https://picsum.photos/seed/npd4/800/600",
    ],
  },
  {
    id: "s5",
    slug: "reverse-engineering",
    name: "Reverse Engineering",
    shortDescription:
      "Scan-to-CAD and physical-to-digital conversion for legacy parts.",
    description:
      "3D scanning and measurement-based reverse engineering to recreate accurate CAD models of physical parts, legacy equipment, or competitor products for redesign and replication.",
    icon: "ScanLine",
    features: [
      "3D laser scanning / FARO arm measurement",
      "Point cloud to CAD surface modelling",
      "GD&T inspection reports",
      "Legacy part replication",
      "Design modification and improvement",
      "Comparison reports (as-designed vs as-built)",
    ],
    deliveryTime: "5–10 business days",
    fileFormats: ["STEP", "IGES", "STL", "Point cloud data", "PDF report"],
    software: ["Geomagic", "SolidWorks", "CATIA", "Polyworks"],
    standards: ["ISO 10360", "ASME Y14.45"],
    images: [
      "https://picsum.photos/seed/re1/800/600",
      "https://picsum.photos/seed/re2/800/600",
      "https://picsum.photos/seed/re3/800/600",
      "https://picsum.photos/seed/re4/800/600",
    ],
  },
  {
    id: "s6",
    slug: "cfd-fea-analysis",
    name: "CFD & FEA Analysis",
    shortDescription:
      "Simulation-driven design validation to eliminate field failures.",
    description:
      "Computational Fluid Dynamics (CFD) and Finite Element Analysis (FEA) for structural integrity, thermal performance, and fluid flow optimization — reducing physical testing cycles.",
    icon: "Activity",
    features: [
      "Static and dynamic structural FEA",
      "Thermal and fatigue analysis",
      "Fluid flow and heat transfer CFD",
      "Pressure vessel stress analysis (PD 5500 / ASME VIII)",
      "Modal and vibration analysis",
      "Detailed engineering reports with findings",
    ],
    deliveryTime: "5–14 business days",
    fileFormats: ["PDF report", "STEP", "H5 result files"],
    software: ["ANSYS", "Abaqus", "SolidWorks Simulation", "OpenFOAM"],
    standards: ["ASME BPVC VIII", "PD 5500", "EN 13445", "ISO 31000"],
    images: [
      "https://picsum.photos/seed/fea1/800/600",
      "https://picsum.photos/seed/fea2/800/600",
      "https://picsum.photos/seed/fea3/800/600",
      "https://picsum.photos/seed/fea4/800/600",
    ],
  },
  {
    id: "s7",
    slug: "gdt-and-inspection",
    name: "GD&T and Inspection Drawings",
    shortDescription:
      "ASME Y14.5 compliant inspection and measurement drawings.",
    description:
      "Inspection-grade drawings and measurement plans with full GD&T callouts per ASME Y14.5 or ISO 1101. Essential for quality control, supplier audits, and first article inspections.",
    icon: "Ruler",
    features: [
      "Full GD&T callout per ASME Y14.5 / ISO 1101",
      "First Article Inspection (FAI) drawings",
      "CMM measurement plans",
      "Ballooned drawings for inspection",
      "Tolerance stack-up analysis",
      "Supplier audit documentation",
    ],
    deliveryTime: "3–7 business days",
    fileFormats: ["PDF", "DXF", "DWG", "Excel inspection reports"],
    software: ["AutoCAD", "SolidWorks", "GD&T Advisor"],
    standards: ["ASME Y14.5-2018", "ISO 1101", "ISO 2768", "ISO 8015"],
    images: [
      "https://picsum.photos/seed/gdt1/800/600",
      "https://picsum.photos/seed/gdt2/800/600",
      "https://picsum.photos/seed/gdt3/800/600",
      "https://picsum.photos/seed/gdt4/800/600",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
