// ════════════════════════════════════════════════════
// BAUSCH & LOMB (HISTORICAL)
// ════════════════════════════════════════════════════
DB.companies.push({id:"bausch",name:"Bausch & Lomb Optical / Microscopy",shortName:"Bausch & Lomb",flag:"🇺🇸",country:"USA",
 founded:1853,status:"historical",featured:false,hq:"Rochester, New York, USA",
 categories:["compound","stereo"],
 overview:"Bausch & Lomb (B&L), founded 1853 in Rochester, NY by John Jacob Bausch and Henry Lomb, made one of the most historically significant contributions to stereo microscopy: the Stereozoom (1947) — the first continuously variable zoom stereo microscope using a Common Main Objective (CMO). Before the Stereozoom, stereo microscopes used fixed magnification steps; the continuously variable zoom with a single shared objective, maintaining parfocality throughout, became the universal industry template. Every CMO zoom stereo made since — by Leica, Nikon, Zeiss, Olympus, Wild, or any other manufacturer — descends conceptually from this 1947 B&L design. The Stereozoom 4, 7, and subsequent models dominated American dissection labs and natural history work for three decades. B&L also produced the Balplan upright compound series for clinical use. In 1991, Leica acquired the Stereozoom product line, which continues today as the Leica MZ series. The remaining B&L businesses (contact lenses, ophthalmic pharmaceuticals, surgical equipment) were eventually acquired by Valeant Pharmaceuticals, now Bausch Health. B&L’s microscopy legacy lives in every CMO stereo microscope sold anywhere in the world today.",
 oem:{acquiredBy:"Microscope division sold to Leica Microsystems (~1990)",acquired:[],makesFor:[],madeBy:[],notes:"The Stereozoom line continues as the Leica MZ series. B&L today is exclusively an ophthalmic/vision health company."},
 models:[
  {id:"bausch-balplan",name:"Balplan",series:"Balplan",type:"compound",subtype:"clinical / research",
   introduced:1962,discontinued:true,price_tier:"premium",
   price_new:null,price_used:"$100–$420",
   illumination:["Tungsten / Halogen"],magnification:"40x–1000x",
   objectives:"B&L Apo / Plan Achromat",eyepieces:"10x/18mm",
   stage:"Mechanical, large format",fluorescence:true,phase_contrast:true,darkfield:true,dic:false,
   motorized:false,inverted:false,camera_port:true,software:"—",
   applications:["Clinical pathology","Research","Hematology"],
   noteworthy:"Flagship B&L compound microscope. Excellent optics and exceptional build quality. Used in American hospitals and universities through the 1980s.",
   oem_source:null},
  {id:"bausch-stereozoom7",name:"Stereozoom 7",series:"Stereozoom",type:"stereo",subtype:"zoom stereo",
   introduced:1965,discontinued:true,price_tier:"premium",
   price_new:null,price_used:"$100–$450",
   illumination:["Incandescent (external)"],magnification:"7x–30x (up to 90x with auxiliary)",
   objectives:"Fixed (Greenough design)",eyepieces:"10x/21mm",
   stage:"Flat base or boom arm",fluorescence:false,phase_contrast:false,darkfield:false,dic:false,
   motorized:false,inverted:false,camera_port:true,software:"—",
   applications:["QC inspection","Dissection","Electronics","Geology","Botany"],
   noteworthy:"The parfocal zoom stereo design initiated with the Stereozoom 4 (1947) became the industry template followed by all modern stereos. This line was sold to Leica and continues as the Leica MZ series.",
   oem_source:null}
]});
