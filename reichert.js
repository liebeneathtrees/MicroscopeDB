// ════════════════════════════════════════════════════
// REICHERT (HISTORICAL)
// ════════════════════════════════════════════════════
DB.companies.push({id:"reichert",name:"Reichert-Jung (C. Reichert AG)",shortName:"Reichert",flag:"🇦🇹",country:"Austria",
 founded:1847,status:"historical",featured:false,hq:"Vienna, Austria (became Leica)",
 categories:["compound"],
 overview:"C. Reichert AG was founded in Vienna in 1847, making it one of the oldest precision optical instrument makers in Europe — predating even Ernst Leitz’s formal takeover of the Wetzlar institute. Reichert built a distinguished reputation for biological and metallurgical research microscopes (the Zetopan, Univar, Polyvar series) as well as ultramicrotomes (Om-U series) and cryostats. In 1984, Reichert merged with Jung (the German firm famous for precision microtomes and histology equipment) to form Reichert-Jung — combining microscopy and histology preparation under one roof. In 1986, Reichert-Jung was acquired by Wild Heerbrugg AG, and in 1990 was absorbed into the newly formed Leica Group. Separately, Reichert had acquired the American Optical microscope line from Warner-Lambert in 1971, adding the Spencer/AO heritage to the Reichert family before its own absorption into Wild and then Leica — creating one of the longest brand chains in microscopy history: Spencer → AO → Warner-Lambert → Reichert-Jung → Wild → Leica. The Fluovert and Polyvar research instruments were highly regarded in European cell biology and materials labs. Important clarification: Reichert Technologies (Rochester, NY), maker of ophthalmic examination instruments, is a completely separate company that shares the name by historical coincidence.",
 oem:{acquiredBy:"Cambridge Instruments → Wild Heerbrugg → Leica Microsystems",acquired:[],makesFor:[],madeBy:[],notes:"Reichert Technologies (ophthalmology, US) is completely unrelated despite the same name."},
 models:[
  {id:"reichert-fluovert",name:"Fluovert FS / Fluovert FU",series:"Fluovert",type:"compound",subtype:"inverted research (fluorescence, pre-Leica)",
   introduced:1975,discontinued:1990,price_tier:"mid",price_new:null,price_used:"$200–$900",
   illumination:["Built-in transmitted halogen","HBO 100W or 50W epi-fluorescence","Multiple filter positions"],
   magnification:"25x–1000x; full fluorescence capability",
   objectives:"160mm finite, Reichert/Leitz thread (RMS-compatible). LWD series for culture vessels.",
   eyepieces:"10x (23.2mm tube); binocular or monocular",
   stage:"Fixed stage with large opening; focusing nosepiece",
   fluorescence:true,phase_contrast:true,darkfield:false,dic:false,motorized:false,inverted:true,camera_port:true,software:"—",
   applications:["Cell biology","Fluorescence","Immunofluorescence","Tissue culture"],
   noteworthy:"Reichert Austria’s flagship research inverted before absorption into Leica. Competed with Wild M40, Zeiss Axiovert 35, and Leitz Diavert in the 1970s–80s. After the Reichert-Leitz and Leica mergers, parts became difficult to source. Uses 160mm finite optics compatible with Leitz 160mm objectives (verify thread on specific units). Very collectable in Europe.",
   oem_source:null},

{id:"reichert-polyvar",name:"Polyvar MET",series:"Polyvar",type:"compound",subtype:"metallurgical research",
   introduced:1975,discontinued:true,price_tier:"ultra",
   price_new:null,price_used:"$500–$2,200",
   illumination:["Halogen (reflected light)","HBO fluorescence"],
   magnification:"100x–2000x (with reflected light objectives 5x–200x)",
   objectives:"Reichert Epiplan / Plan Apo (reflected light)",eyepieces:"10x/25mm",
   stage:"Mechanical 180×160mm",fluorescence:true,phase_contrast:false,darkfield:true,dic:true,
   motorized:false,inverted:false,camera_port:true,software:"—",
   applications:["Metallurgy","Semiconductor inspection","Materials science","Geology"],
   noteworthy:"Premium reflected-light metallurgical instrument with exceptional Austrian craftsmanship. Outstanding for metals, ceramics, and semiconductor inspection. Highly sought by collectors and materials scientists.",
   oem_source:null}
]});
