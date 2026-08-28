// ════════════════════════════════════════════════════
// KEYENCE
// ════════════════════════════════════════════════════
DB.companies.push({id:"keyence",name:"Keyence Corporation",shortName:"Keyence",flag:"🇯🇵",country:"Japan",
 founded:1974,status:"active",featured:false,hq:"Osaka, Japan",
 categories:["compound"],
 overview:"Keyence Corporation was founded in 1974 in Osaka, Japan, by Takemitsu Takizaki, initially as a sensor and factory automation company. Keyence entered microscopy with an approach entirely unlike traditional manufacturers: turnkey all-in-one digital systems with no eyepieces, no alignment, and no specialist training required, sold exclusively through Keyence’s own direct salesforce — no dealers or distributors worldwide. This model and their gross margins (~55%) have made Keyence one of the most profitable companies in Japan by market cap per employee. Key systems: the VHX Digital Microscope series (introduced 2007) replaced the optical eyepiece with a real-time digital display, automated focus stacking, and 3D surface measurement — targeting industrial QC and failure analysis labs that needed documentation and measurement more than optical research capability. The BZ-X fluorescence microscope series (2012) introduced automated all-in-one widefield fluorescence with built-in whole-well scanning, no shading correction required, and fully automated quantification — disrupting the traditional fluorescence microscope market for pharmaceutical QC and cell biology applications where ease-of-use and repeatability matter more than maximum optical performance. Keyence instruments are not modular or upgradeable in the traditional sense; they are closed proprietary systems designed for workflow automation, not researcher customization.",
 oem:{acquiredBy:null,acquired:[],makesFor:[],madeBy:[],notes:"Keyence uses proprietary optical designs and sells exclusively direct."},
 models:[
  {id:"keyence-bzx800",name:"BZ-X800",series:"BZ-X",type:"compound",subtype:"all-in-one fluorescence",
   introduced:2018,discontinued:false,price_tier:"premium",
   price_new:"$18,000–$38,000",price_used:"$5,000–$15,000",
   illumination:["LED: DAPI/GFP/mCherry/Cy5 channels"],magnification:"20x–1000x",
   objectives:"Plan Apo λ series",eyepieces:"10x/22mm",
   stage:"Motorized",fluorescence:true,phase_contrast:true,darkfield:false,dic:false,
   motorized:true,inverted:false,camera_port:true,
   software:"BZ-X800 Analyzer (AI cell counting, stitching, deconvolution — built-in, no PC required)",
   applications:["Pharma QC","Histology","Automated cell counting","Tissue sections","High-content analysis"],
   noteworthy:"Fully automated tiling, Z-stacking, and multi-channel acquisition. No PC required for basic use. AI cell counting and deconvolution built into the instrument. Widely adopted in pharmaceutical QC labs and CROs for its turnkey operation.",
   oem_source:null},
  {id:"keyence-vhx7000",name:"VHX-7000",series:"VHX",type:"compound",subtype:"digital microscope (no eyepieces)",
   introduced:2018,discontinued:false,price_tier:"premium",
   price_new:"$25,000–$65,000",price_used:"$6,000–$20,000",
   illumination:["LED coaxial + ring","Multi-angle LED array"],magnification:"20x–1000x",
   objectives:"ZS series proprietary zoom lenses",eyepieces:"None (fully digital)",
   stage:"Motorized X/Y/Z",fluorescence:false,phase_contrast:false,darkfield:false,dic:false,
   motorized:true,inverted:false,camera_port:true,
   software:"VHX-7000 Series (4K HDR, 3D measurement, depth composition)",
   applications:["Failure analysis","Industrial QC","PCB inspection","Surface analysis","Fracture analysis"],
   noteworthy:"4K image sensor with real-time HDR. 3D surface profiling and depth composition built in. Fully digital workflow with no eyepieces. Industry standard for industrial failure analysis.",
   oem_source:null}
]});
