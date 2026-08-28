// ════════════════════════════════════════════════════
// AMERICAN OPTICAL (HISTORICAL)
// ════════════════════════════════════════════════════
DB.companies.push({id:"ao",name:"American Optical Corporation",shortName:"American Optical",flag:"🇺🇸",country:"USA",
 founded:1833,status:"historical",featured:false,hq:"Southbridge, Massachusetts, USA",
 categories:["compound","stereo"],
 overview:"American Optical Corporation (AO), founded in 1833 in Southbridge, Massachusetts, began as a general optical goods manufacturer and expanded into scientific microscopes through its acquisition of Spencer Lens Company (Buffalo, NY) in 1935. Spencer, founded in 1891, was at the time one of America’s most respected microscope manufacturers — its instruments were standard equipment in US hospitals, universities, and research labs for decades. The Spencer/AO microscopes became workhorses of American science. AO’s parent company was sold to Warner-Lambert Pharmaceutical in 1967; the microscope line was then sold to C. Reichert AG (Vienna) in 1971, becoming Reichert-Jung, then passing to Wild Heerbrugg, and ultimately to Leica Microsystems — one of the longest acquisition chains in microscopy history (Spencer → AO → Warner-Lambert → Reichert → Wild → Leica). The Spencer/AO microscope brand disappeared from new production by the early 1990s. The remaining AO consumer optical divisions eventually reached 3M (AO Safety eyewear).",
 oem:{acquiredBy:"Warner-Lambert (1967), then dismembered through multiple subsequent sales",acquired:["Spencer Lens Company (1935)"],makesFor:[],madeBy:[],notes:"AO microscopes manufactured in Buffalo, NY (Spencer works). Line fully discontinued, parts scarce."},
 models:[
  {id:"ao-microstar",name:"Microstar IV",series:"Microstar",type:"compound",subtype:"research upright",
   introduced:1965,discontinued:true,price_tier:"premium",
   price_new:null,price_used:"$100–$380",
   illumination:["Halogen","HBO fluorescence"],magnification:"40x–1000x",
   objectives:"AO Spencer objectives (achromat/plan achromat)",eyepieces:"10x/18mm",
   stage:"Mechanical, large format",fluorescence:true,phase_contrast:true,darkfield:true,dic:false,
   motorized:false,inverted:false,camera_port:true,software:"—",
   applications:["Research","Clinical pathology","Hematology","Fluorescence"],
   noteworthy:"Flagship American Optical research microscope. Well-regarded for robustness. Found in many US university labs through the 1980s. Parts increasingly scarce but some specialty vintage service still available.",
   oem_source:null},
  {id:"ao-cycloptic",name:"Cycloptic Stereo",series:"Cycloptic",type:"stereo",subtype:"zoom stereo",
   introduced:1958,discontinued:true,price_tier:"premium",
   price_new:null,price_used:"$100–$380",
   illumination:["Incandescent (external)"],magnification:"7x–30x",
   objectives:"Fixed (Greenough design)",eyepieces:"10x",stage:"Flat base",
   fluorescence:false,phase_contrast:false,darkfield:false,dic:false,
   motorized:false,inverted:false,camera_port:false,software:"—",
   applications:["Dissection","Surgery","Entomology","Zoology"],
   noteworthy:"One of the earliest American zoom stereo designs. Competed directly with the Wild M series in the US market through the 1960s–70s. Extremely robust construction.",
   oem_source:null}
]});
