// MicroscopeDB — Data File v3
// Edit this file to add/update manufacturers and models.
// Keep this file in the same folder as MicroscopeDB.html
//
// ADDING A COMPANY: { id, name, shortName, flag, country, founded, status,
//   hq, featured (true for Big Four), categories, overview,
//   oem: {acquiredBy, acquired, makesFor, madeBy, notes}, models: [...] }
//
// ADDING A MODEL: { id, name, series, type, subtype, introduced, discontinued,
//   price_tier, price_new (null if discontinued), price_used,
//   illumination, magnification, objectives, eyepieces, stage,
//   fluorescence, phase_contrast, darkfield, dic, motorized, inverted,
//   camera_port, software, applications, noteworthy, oem_source }
//
// type: "compound" | "stereo"    price_tier: "budget"|"mid"|"premium"|"ultra"
// status: "active" | "historical"
// price_new / price_used: "$X,XXX–$XX,XXX" or null if discontinued/unknown

// This file must load FIRST (before any per-manufacturer data file).
// Each data/<company>.js file does: DB.companies.push({...});
const DB = { companies: [] };

DB.oem_relations = [

 // ── ZEISS ───────────────────────────────────────────────────────────────────
 {source:"zeiss",target:"zeiss",type:"split",year:1945,
  description:"End of WWII: US forces evacuate 126 Zeiss Jena senior staff and scientists to Heidenheim (US zone). Soviet forces occupy Jena and begin dismantling factories for reparations. The single Carl Zeiss enterprise is effectively divided by the Iron Curtain."},

 {source:"zeiss",target:"zeiss",type:"split",year:1946,
  description:"West: Evacuated staff found 'Opton Optische Werke Oberkochen GmbH' — the seed of West German Carl Zeiss — in the small town of Oberkochen, Baden-Württemberg. East: Jena factories partially rebuilt under Soviet occupation. The company name 'Carl Zeiss Jena' continues under Soviet management."},

 {source:"zeiss",target:"zeiss",type:"split",year:1948,
  description:"East German authorities nationalize and expropriate the Jena Zeiss plants without compensation. The state-owned enterprise 'VEB Carl Zeiss Jena' (Volkseigener Betrieb = People's Own Enterprise) is created. The two Zeiss companies are now legally and politically separate entities competing for the 'Carl Zeiss' trademark globally."},

 {source:"zeiss",target:"zeiss",type:"name_change",year:1951,
  description:"West German Zeiss-Opton renames itself 'Carl Zeiss' and is formally entered into the commercial register. From 1951 onward two companies both legally named 'Carl Zeiss' operate simultaneously — one in Oberkochen (West Germany, foundation-owned) and one in Jena (East Germany, state-owned). A 1971 London Agreement divides global trademark territories between them."},

 {source:"zeiss",target:"zeiss",type:"merger",year:1991,
  description:"German reunification triggers the reintegration of Zeiss. Jenoptik Carl Zeiss Jena GmbH is formed from VEB Carl Zeiss Jena; Carl Zeiss Oberkochen acquires a 51% stake. The non-optical Jena activities are spun off as Jenoptik GmbH (photonics, optoelectronics, mechatronics). The microscopy and precision optics divisions return to Zeiss Oberkochen control — effectively reuniting the pre-war Carl Zeiss enterprise after 46 years of division."},

 {source:"zeiss",target:"zeiss",type:"merger",year:1995,
  description:"Carl Zeiss Oberkochen acquires full (100%) control of Carl Zeiss Jena GmbH and Jenaer Glaswerk, completing the post-reunification integration. Jena becomes home to Carl Zeiss Microscopy GmbH and Carl Zeiss Meditec AG. The Carl-Zeiss-Stiftung foundation is now domiciled in both Jena and Heidenheim, formally reconciling the split legal structure of the post-war decades."},

 // ── LEICA / WILD / LEITZ ─────────────────────────────────────────────────────
 {source:"leitz",target:"leica",type:"merger",year:1986,
  description:"Ernst Leitz Wetzlar GmbH and Wild Heerbrugg AG merge to form the Wild Leitz Group — the first step in building what would become Leica Microsystems. Neither company had the Leica name yet at this stage; the Leica brand was owned separately by Leica Camera."},

 {source:"wild",target:"leica",type:"merger",year:1986,
  description:"Wild Heerbrugg AG (Switzerland), renowned for its supremely built stereo microscopes and survey instruments, merges with Ernst Leitz Wetzlar to form the Wild Leitz Group. Wild's stereo microscope line (M3, M5, M7, M8, M10, M11, M20, M40) becomes the foundation of all subsequent Leica stereo instruments including the Leica MZ and M series."},

 {source:"reichert",target:"leica",type:"acquisition",year:1990,
  description:"Wild Leitz Group acquires Reichert-Jung (C. Reichert AG, Vienna), the Austrian optical company tracing back to 1846. Reichert's inverted microscope line (Fluovert), cryostat/ultramicrotome products, and ophthalmic instruments are absorbed. The Wild Leitz Group simultaneously merges with Cambridge Instruments (UK) to form the Leica Group — adopting the Leica name for the first time."},

 {source:"leitz",target:"leica",type:"name_change",year:1990,
  description:"The Wild Leitz Group merges with Cambridge Instruments (UK makers of metallurgical and electron microscopes) to form 'The Leica Group' — the first use of the Leica name for the microscopy enterprise. The Leica name was licensed from Leica Camera AG (an entirely separate company). Cambridge Instruments contributed electron microscopy, materials characterization, and medical imaging divisions."},

 {source:"bausch",target:"leica",type:"acquisition",year:1991,
  description:"Leica acquires the Bausch & Lomb Stereozoom microscope product line and related accessories. The Stereozoom (introduced 1947) was the original CMO stereo design template — Leica continues it as the Leica MZ series. B&L's remaining optical businesses (eyewear, contact lenses, pharmaceutical ophthalmics) are retained separately by Bausch & Lomb."},

 {source:"leica",target:"leica",type:"name_change",year:1997,
  description:"'The Leica Group' formally adopts the name 'Leica Microsystems' — the name under which the company has operated since. The brand name Leica Microsystems is now the internationally recognized identity, distinct from Leica Camera AG (cameras) and Leica Geosystems (surveying). All three 'Leica' companies are legally separate entities with no ownership connection."},

 {source:"leica",target:"leica",type:"acquisition",year:2005,
  description:"Danaher Corporation (Washington DC) acquires Leica Microsystems for approximately €450 million (September 2005). Danaher is a diversified science and technology conglomerate (now Fortive / Danaher split). Leica Microsystems operates as an independent subsidiary within Danaher's Life Sciences platform alongside other acquisitions including Beckman Coulter, Hologic, and Cepheid."},

 // ── OLYMPUS / EVIDENT ────────────────────────────────────────────────────────
 {source:"olympus",target:"olympus",type:"name_change",year:1919,
  description:"Olympus is founded on October 12, 1919 as 'Takachiho Seisakusho' (Takachiho Manufacturing) in Tokyo by Takeshi Yamashita, producing microscopes and thermometers. The Olympus trademark is registered in 1921. The company is renamed 'Takachiho Optical Industries' in 1942, then 'Olympus Optical Co., Ltd.' in 1949. The final name 'Olympus Corporation' is adopted in 2003."},

 {source:"olympus",target:"olympus",type:"rebrand",year:2022,
  description:"Olympus Corporation spins off its Scientific Solutions Division (microscopes, industrial videoscopes, X-ray fluorescence analyzers) into a new wholly owned subsidiary named 'Evident Corporation' effective April 1, 2022. This is a precursor to a planned sale. Olympus retains its medical endoscope business."},

 {source:"olympus",target:"olympus",type:"acquisition",year:2023,
  description:"Bain Capital Private Equity acquires Evident Corporation from Olympus Corporation for approximately ¥427.6 billion (~$3.1 billion USD), completing April 3, 2023. Evident now operates as an independent company under private equity ownership, headquartered in Tokyo with approximately 4,300 employees worldwide. The Olympus microscope brand continues under the Evident name with full product continuity."},

 // ── NIKON ────────────────────────────────────────────────────────────────────
 {source:"nikon",target:"nikon",type:"merger",year:1917,
  description:"Nippon Kogaku K.K. (Japan Optical Industries Co.) is founded July 25, 1917 through the merger of three Japanese optical manufacturers: the optical instruments division of Tokyo Keiki Seizo, the mirror division of Iwaki Glass Manufacturing, and Fujii Lens Manufacturing. Initial focus: precision military optics and microscopes. The merger was backed by Mitsubishi's Koyata Iwasaki to build a domestic optical industry independent of German imports."},

 {source:"nikon",target:"nikon",type:"name_change",year:1988,
  description:"Nippon Kogaku K.K. officially adopts the name 'Nikon Corporation' — the Nikon brand had been used on cameras since 1946 but the legal company name remained Nippon Kogaku until this formal change. The name 'Nikon' is a contracted form of 'Nippon Kōgaku' and was reportedly also influenced by the Zeiss camera brand 'Ikon'. Nikon had introduced the first microscope with revolving nosepiece (the Joico, 1925) and the CF optical system (1970s) by this point."},

 // ── AMERICAN OPTICAL / SPENCER / AO ─────────────────────────────────────────
 {source:"ao",target:"ao",type:"merger",year:1935,
  description:"Spencer Lens Company (Buffalo, NY — founded 1891, makers of high-quality American research microscopes) is acquired by American Optical Corporation. Spencer microscopes, known for excellent optical quality and used in US hospitals and universities from the 1900s onward, continue under the Spencer/AO brand. The Spencer series remains in production through the mid-20th century."},

 {source:"ao",target:"reichert",type:"acquisition",year:1971,
  description:"American Optical's microscope division is acquired by Warner-Lambert Pharmaceutical Company, then in 1976 the division is sold to Reichert (C. Reichert AG, Vienna). The former Spencer/AO instruments are subsequently rebranded as 'Reichert-Jung' and later simply 'Reichert'. This chain — Spencer → AO → Warner-Lambert → Reichert → Wild Leitz → Leica — is one of the longest OEM/acquisition chains in microscopy history, tracing Olympus-era American microscopes to modern Leica."},

 // ── DeltaVision / Applied Precision ─────────────────────────────────────────
 {source:"deltavision",target:"deltavision",type:"acquisition",year:2011,
  description:"Applied Precision, Inc. (Issaquah, WA — maker of the DeltaVision widefield deconvolution and OMX super-resolution systems) is acquired by GE Healthcare Life Sciences. The DeltaVision brand continues under GE's umbrella with ongoing product development and software support (SoftWoRx)."},

 {source:"deltavision",target:"deltavision",type:"acquisition",year:2019,
  description:"GE Healthcare Life Sciences — including the Applied Precision / DeltaVision product portfolio — is spun out from GE and acquired by Danaher Corporation as 'Cytiva' in 2020 (deal announced 2019). The DeltaVision brand continues under Cytiva, making Leica Microsystems and DeltaVision sister companies within the Danaher Life Sciences portfolio."},

 // ── MOTIC OEM SUPPLY CHAIN ───────────────────────────────────────────────────
 {source:"motic",target:"amscope",type:"oem",year:2006,
  description:"AmScope (United Scope LLC) rebrands Motic BA and AE compound microscope series for the US consumer market, becoming Motic's largest US distribution partner. The Motic BA210 appears as the AmScope B490; the BA310 underlies several AmScope T-series models. Many AmScope instruments are physically identical to Motic instruments sold under the Motic name at similar price points."},

 {source:"motic",target:"lw-scientific",type:"oem",year:2000,
  description:"LW Scientific uses Motic-sourced optical systems in several US-assembled instruments, combining Motic optics with US mechanical assembly and customer support. LW Scientific's Revelation series and some Revelation III configurations use this arrangement."},

 {source:"motic",target:"motic",type:"oem",year:2005,
  description:"Motic instruments are sold under numerous additional OEM brand names globally beyond AmScope and LW Scientific. Known OEM arrangements include: Swift Optical M-series (some configurations), Accu-Scope (various clinical and veterinary models), Fisher Scientific (some educational models), and numerous European and Asian distributors. The Motic BA310 platform in particular is one of the most widely OEM-distributed compound microscope chassis in the world."},

 // ── OTHER RELATIONSHIPS ──────────────────────────────────────────────────────
 {source:"meiji",target:"national-optical",type:"oem",year:2000,
  description:"Some National Optical models use Meiji-sourced or comparable Japanese optical components, particularly in their higher-specification educator and clinical configurations. National Optical's San Antonio distribution model often involves selective sourcing from Japanese optical manufacturers for premium configurations."},

 {source:"labomed",target:"leica",type:"oem",year:2000,
  description:"Labomed (Labo America Inc.) has manufactured OEM educational microscopes sold under the Leica brand including models comparable to the Leica CME, DME, and DM750. The Labomed Lx300 and Lx400 are the house-branded equivalents of these Leica-branded instruments. This arrangement is one of the clearer examples of Big Four branding on non-Big-Four manufactured instruments in the clinical/educational segment."},

 {source:"bausch",target:"bausch",type:"name_change",year:1947,
  description:"Bausch & Lomb introduces the Stereozoom microscope — the first continuously variable zoom stereo microscope with a common main objective (CMO) design. This instrument becomes the template for virtually all subsequent CMO stereo designs including the Leica MZ, Nikon SMZ-U, Zeiss Stemi, and Olympus SZH series. When B&L's microscopy line is sold to Leica in 1991, it ends B&L's 140-year run as a microscope manufacturer (founded 1853)."}
];
